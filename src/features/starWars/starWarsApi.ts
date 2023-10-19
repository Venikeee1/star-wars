import { fetchIt } from '../../helpers/fetchIt'
import { PeoplePaginatedDTO, PersonDTO } from './starWars.types'

const BASE_URL = 'https://swapi.dev/api/'

export const getPeople = ({
	page,
	search,
}: {
	page?: number
	search?: string
}) => {
	const searchQuery = search ? `&search=${search}` : ''
	const url = `${BASE_URL}people?page=${page ?? 1}${searchQuery}`

	return fetchIt<PeoplePaginatedDTO>(url)
}

export const getPerson = (id: string) => {
	return fetchIt<PersonDTO>(`${BASE_URL}people/${id}`)
}
