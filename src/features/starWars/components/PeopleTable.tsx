import { Column, Table } from '../../../UI/Table/Table'

export type PeopleTableHead = {
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

type PeopleTableProps = {
	isError: boolean
	isLoading: boolean
	isUpdating: boolean
	rows: PeopleTableHead[]
}

export const PeopleTable = ({
	isError,
	isLoading,
	isUpdating,
	rows,
}: PeopleTableProps) => {
	if (isLoading) {
		return <>Loading...</>
	}

	if (isError) {
		return <>Something went wrong</>
	}

	return (
		<div className="relative flex flex-1 flex-col">
			<Table<keyof PeopleTableHead>
				data={rows}
				columns={columns}
				isLoading={isUpdating}
			/>
		</div>
	)
}
