import { ComponentProps } from 'react'
import { Icon } from '../Icons/Icons'

type NavButtonProps = ComponentProps<'button'> & {
	reverse?: boolean
}
export const NavButton = ({ reverse, ...props }: NavButtonProps) => {
	const classNames = [
		reverse ? '[transform:rotateY(180deg)]' : '',
		'hover:text-cyan-500 transition-colors',
	].join(' ')

	return (
		<button {...props} className={classNames}>
			<Icon className="h-auto w-16" name="atAt" />
		</button>
	)
}
