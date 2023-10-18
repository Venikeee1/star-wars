import { useMemo, useState } from 'react'
import { PeopleTable, PeopleTableHead } from './PeopleTable'
import { usePeopleQuery } from '../starWarsQuery'
import { formatDate } from '../../../helpers/dateFormat'
import { useDebounce } from 'usehooks-ts'
import { Pagination } from '../../../UI/Pagination/Pagination'

export const StarWarsCharacters = () => {
	const [query, setQuery] = useState('')
	const deferredQuery = useDebounce(query, 250)

	const {
		data: peopleList,
		isLoading,
		isFetching,
		isError,
		totalPages,
		goToPage,
		page,
	} = usePeopleQuery({ search: deferredQuery })

	const rows: PeopleTableHead[] = useMemo(() => {
		if (!peopleList) return []

		return peopleList.results.map(({ name, created, birth_year, height }) => {
			return {
				name,
				height,
				created: formatDate(created),
				birthYear: birth_year,
			}
		})
	}, [peopleList])

	return (
		<section className="w-full">
			<input
				type="text"
				className="w-full"
				onChange={(e) => setQuery(e.target.value)}
			/>
			<div className="flex min-h-[470px] w-full flex-col">
				<PeopleTable
					rows={rows}
					isError={isError}
					isLoading={isLoading}
					isUpdating={isFetching}
				/>
			</div>
			<div className="flex justify-center py-4">
				{rows.length > 0 && (
					<Pagination
						total={totalPages}
						selectedPage={page}
						onChange={goToPage}
					/>
				)}
			</div>
		</section>
	)
}
