import { ReactNode } from 'react'
import { Loader } from './Loader'

export type Column<TKeys extends string = string> = {
	head: ReactNode
	key: TKeys
}

export type Row<TKeys extends string = string> = Record<TKeys, ReactNode>

export type TableProps<TKeys extends string> = {
	data: Row<TKeys>[]
	columns: Array<Column<TKeys>>
	isLoading?: boolean
	onRowClick?: (row: Row<TKeys>) => void
}

export const Table = <TKeys extends string = string>({
	data,
	columns,
	isLoading,
	onRowClick,
}: TableProps<TKeys>) => {
	return (
		<div className="h-full flex-1 rounded-md bg-primary p-2">
			{isLoading && <Loader />}
			<table className="w-[100%]">
				<thead>
					<tr>
						{columns.map(({ head, key }) => (
							<th className="p-2 text-left" key={key}>
								{head}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{data.map((row, index) => (
						<tr
							key={index}
							onClick={() => onRowClick?.(row)}
							className="hover:cursor-pointer hover:bg-slate-500"
						>
							{columns.map(({ key }) => (
								<td className="p-2" key={key}>
									{row[key]}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}
