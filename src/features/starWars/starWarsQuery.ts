import { useQuery } from 'react-query'
import { getPeople, getPerson, searchPeople } from './starWarsApi'

const peopleKeys = {
	namespace: 'people',
	all: (page?: number) => [peopleKeys.namespace, page ?? 1],
	person: (id: number) => [peopleKeys.namespace, id],
	search: (name: string, page?: number) => [peopleKeys.namespace, page, name],
}

export const usePeopleQuery = (page?: number) => {
	return useQuery({
		queryKey: peopleKeys.all(page),
		queryFn: () => getPeople(page),
	})
}

export const usePersonQuery = (id: number) => {
	return useQuery({
		queryKey: peopleKeys.person(id),
		queryFn: () => getPerson(id),
	})
}

export const usePersonSearchQuery = (name: string, page?: number) => {
	return useQuery({
		queryKey: peopleKeys.search(name, page),
		queryFn: () => searchPeople(name, page),
	})
}
