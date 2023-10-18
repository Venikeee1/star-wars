import { useQuery } from '@tanstack/react-query'
import { getPeople, getPerson } from './starWarsApi'

const peopleKeys = {
	namespace: 'people',
	all: (page: number, search?: string) => [peopleKeys.namespace, page, search],
	person: (id: number) => [peopleKeys.namespace, id],
}

export const usePeopleQuery = ({
	search,
	page,
}: {
	search?: string
	page?: number
}) => {
	return useQuery({
		queryKey: peopleKeys.all(page ?? 1, search),
		queryFn: () => getPeople({ page, search }),
		staleTime: 2 * 60 * 60,
	})
}

export const usePersonQuery = (id: number) => {
	return useQuery({
		queryKey: peopleKeys.person(id),
		queryFn: () => getPerson(id),
	})
}
