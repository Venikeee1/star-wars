import { useQuery, keepPreviousData } from '@tanstack/react-query'
import { getPeople, getPerson } from './starWarsApi'
import { useEffect, useRef, useState } from 'react'
import { usePagination } from '../../hooks/usePagination'

const peopleKeys = {
	namespace: 'people',
	all: (page: number, search?: string) => [peopleKeys.namespace, page, search],
	person: (id: number) => [peopleKeys.namespace, id],
}

// TODO refactor it to Infinite Query
export const usePeopleQuery = ({ search }: { search?: string }) => {
	const [totalResults, setTotalResults] = useState(1)
	const { page, goToPage, totalPages } = usePagination({ total: totalResults })
	const prevSearch = useRef<string | undefined>('')
	const isSearchQueryChanged = search !== prevSearch.current
	const currentPage = isSearchQueryChanged ? 1 : page

	useEffect(() => {
		prevSearch.current = search

		if (isSearchQueryChanged) {
			goToPage(1)
		}
	}, [search, goToPage, isSearchQueryChanged])

	const queryContext = {
		...useQuery({
			queryKey: peopleKeys.all(currentPage, search),
			queryFn: () => getPeople({ page: currentPage, search }),
			staleTime: 2 * 60 * 60,
			placeholderData: keepPreviousData,
		}),
	}

	useEffect(() => {
		if (!queryContext.data) return

		setTotalResults(queryContext.data.count)
	}, [queryContext.data])

	return {
		...queryContext,
		page,
		goToPage,
		totalPages,
	}
}

export const usePersonQuery = (id: number) => {
	return useQuery({
		queryKey: peopleKeys.person(id),
		queryFn: () => getPerson(id),
	})
}
