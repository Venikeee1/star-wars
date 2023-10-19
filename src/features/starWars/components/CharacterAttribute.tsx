import { PropsWithChildren } from 'react'

type CharacterAttributeProps = PropsWithChildren<{
	label: string
}>

export const CharacterAttribute = ({
	label,
	children,
}: CharacterAttributeProps) => {
	return (
		<section className="mb-3">
			<div className="font-semibold">
				{label} <span className="font-normal">{children}</span>
			</div>
		</section>
	)
}
