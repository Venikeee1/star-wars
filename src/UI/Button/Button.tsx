import { ComponentProps } from 'react'

export type ButtonProps = ComponentProps<'button'>

export const Button = ({ children, ...rest }: ButtonProps) => {
	return (
		<button
			{...rest}
			className="bg-secondary min-w-[180px] rounded-md px-3 py-3"
		>
			{children}
		</button>
	)
}
