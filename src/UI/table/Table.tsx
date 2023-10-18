import { ReactNode } from 'react'

export type Column<TKeys extends string = string> = {
	head: ReactNode
	key: TKeys
}

export type Row<TKeys extends string = string> = Record<TKeys, ReactNode>

export type TableProps<TKeys extends string> = {
	data: Row<TKeys>[]
	columns: Array<Column<TKeys>>
	isLoading?: boolean
}

export const Table = <TKeys extends string = string>({
	data,
	columns,
	isLoading,
}: TableProps<TKeys>) => {
	return (
		<div className="bg-primary h-full rounded-md p-2">
			{isLoading && <>Loading...</>}
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
						<tr key={index}>
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
