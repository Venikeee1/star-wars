import { fetchIt } from '../../helpers/fetchIt'
import { PeoplePaginatedDTO, PersonDTO } from './starWars.types'

const baseUrl = 'https://swapi.dev/api/'

export const getPeople = (page?: number) => {
	return fetchIt<PeoplePaginatedDTO>(`${baseUrl}people?page=${page ?? 1}`)
}

export const getPerson = (id: number) => {
	return fetchIt<PersonDTO>(`${baseUrl}people/${id}`)
}

export const searchPeople = (name: string, page?: number) => {
	return fetchIt<PeoplePaginatedDTO>(
		`${baseUrl}people?search=${name}&page=${page ?? 1}`
	)
}
