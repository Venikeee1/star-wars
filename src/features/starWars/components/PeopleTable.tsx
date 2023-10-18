import { useMemo } from 'react'
import { Column, Table } from '../../../UI/Table/Table'
import { usePeopleQuery } from '../starWarsQuery'
import { formatDate } from '../../../helpers/dateFormat'

type PeopleTableHead = {
	name: string
	birthYear: string
	height: string
	created: string
}

const columns: Column<keyof PeopleTableHead>[] = [
	{ head: 'Name', key: 'name' },
	{ head: 'Birth year', key: 'birthYear' },
	{ head: 'Height', key: 'height' },
	{ head: 'Created', key: 'created' },
]

export const PeopleTable = () => {
	const { data, isLoading, isError } = usePeopleQuery()
	const rows: PeopleTableHead[] = useMemo(() => {
		if (!data) return []

		return data.results.map(({ name, created, birth_year, height }) => {
			return {
				name,
				height,
				created: formatDate(created),
				birthYear: birth_year,
			}
		})
	}, [data])

	if (isLoading) {
		return <>Loading...</>
	}

	if (isError) {
		return <>Something went wrong</>
	}

	return <Table<keyof PeopleTableHead> data={rows} columns={columns} />
}
