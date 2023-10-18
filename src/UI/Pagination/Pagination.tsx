import { useMemo } from 'react'
import { NavButton } from './NavButton'
import { PageNumber } from './PageNumber'

type PaginationProps = {
	total: number
	selectedPage: number
	limit?: number
	onChange: (page: number) => void
}

const range = (n: number) => Array.from({ length: n }, (_, i) => i + 1)

export const Pagination = ({
	total,
	selectedPage,
	limit = 5,
	onChange,
}: PaginationProps) => {
	const pages = useMemo(() => range(total), [total])
	const halfLimit = limit / 2
	const startPage = (() => {
		if (selectedPage < halfLimit) {
			return 0
		}

		if (selectedPage > total - halfLimit) {
			return total - limit
		}

		return selectedPage - Math.round(halfLimit)
	})()
	const endPage = startPage + limit
	const currentPages =
		pages.length > limit ? pages.slice(startPage, endPage) : pages

	const handlePrevPage = () => {
		onChange(selectedPage - 1)
	}

	const handleNextPage = () => {
		onChange(selectedPage + 1)
	}

	return (
		<section className="flex items-center">
			<NavButton onClick={handlePrevPage} title="prev page">
				Prev
			</NavButton>
			{currentPages.map((pageNumber) => {
				return (
					<PageNumber
						key={pageNumber}
						isActive={pageNumber === selectedPage}
						onClick={() => onChange(pageNumber)}
					>
						{pageNumber}
					</PageNumber>
				)
			})}
			<NavButton reverse title="next page" onClick={handleNextPage}>
				Next
			</NavButton>
		</section>
	)
}
