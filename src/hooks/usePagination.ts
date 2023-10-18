import { useState } from 'react'

type UsePagination = {
	perPage?: number
	total: number
	initialPage?: number
}

export const usePagination = ({
	perPage = 10,
	total,
	initialPage = 1,
}: UsePagination) => {
	const totalPages = Math.floor(total / perPage) || 1
	const [page, setPage] = useState(initialPage)

	const nextPage = () => {
		if (page === totalPages) return

		setPage((page) => page + 1)
	}

	const prevPage = () => {
		if (page === 1) return

		setPage((page) => page - 1)
	}

	const goToPage = (page: number) => {
		if (page < 1 || page > totalPages) return

		setPage(page)
	}

	return {
		page,
		nextPage,
		prevPage,
		goToPage,
		totalPages,
	}
}
