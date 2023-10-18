import { ReactNode } from 'react'

export type Column<TKeys extends string = string> = {
	head: ReactNode
	key: TKeys
}

export type Row<TKeys extends string = string> = Record<TKeys, ReactNode>

export type TableProps<TKeys extends string> = {
	data: Row<TKeys>[]
	columns: Array<Column<TKeys>>
}

export const Table = <TKeys extends string = string>({
	data,
	columns,
}: TableProps<TKeys>) => {
	return (
		<div className="rounded-md bg-[#1a1d27] p-2">
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
