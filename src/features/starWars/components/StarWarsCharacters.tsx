import { useMemo, useState } from 'react'
import { PeopleTable, PeopleTableHead } from './PeopleTable'
import { usePeopleQuery } from '../starWarsQuery'
import { formatDate } from '../../../helpers/dateFormat'
import { useDebounce } from 'usehooks-ts'

export const StarWarsCharacters = () => {
	const [query, setQuery] = useState('')
	const deferredQuery = useDebounce(query, 250)

	const {
		data: peopleList,
		isLoading,
		isFetching,
		isError,
		isPreviousData,
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
		<section className="h-[470px] w-full">
			<input
				type="text"
				className="w-full"
				onChange={(e) => setQuery(e.target.value)}
			/>
			<div className="w-full">
				<PeopleTable
					rows={rows}
					isError={isError}
					isLoading={isLoading}
					isUpdating={isFetching && !isPreviousData}
				/>
			</div>
		</section>
	)
}
