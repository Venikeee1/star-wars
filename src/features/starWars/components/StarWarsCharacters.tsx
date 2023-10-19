import { useMemo, useState } from 'react'
import { PeopleTable, PeopleTableHead } from './PeopleTable'
import { usePeopleQuery } from '../starWarsQuery'
import { formatDate } from '../../../helpers/dateFormat'
import { useDebounce } from 'usehooks-ts'
import { Pagination } from '../../../UI/Pagination/Pagination'
import { SearchInput } from './SearchInput'
import { Row } from '../../../UI/Table/Table'
import { useNavigate } from 'react-router-dom'

export const StarWarsCharacters = () => {
	const [query, setQuery] = useState('')
	const navigate = useNavigate()
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

	const handleSelectCharacter = (row: Row<keyof PeopleTableHead>) => {
		if (!peopleList) return

		const character = peopleList.results.find(
			(character) => character.name === row.name
		)

		if (!character) return

		// it is strange that this API doesn't return character id
		const id = character.url.replace('https://swapi.dev/api/people/', '')[0]

		navigate(`/character/${id}`)
	}

	return (
		<section className="w-full">
			<SearchInput type="text" onChange={(e) => setQuery(e.target.value)} />
			<div className="flex min-h-[470px] w-full flex-col">
				<PeopleTable
					rows={rows}
					isError={isError}
					isLoading={isLoading}
					isUpdating={isFetching}
					onRowClick={handleSelectCharacter}
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
