import { ComponentProps } from 'react'
import { Icon } from '../Icons/Icons'
import { useAudio } from '../../hooks/useAudio'
import audioPath from '../../assets/blaster.mp3'

type NavButtonProps = ComponentProps<'button'> & {
	reverse?: boolean
}
export const NavButton = ({ reverse, ...props }: NavButtonProps) => {
	const classNames = [
		reverse ? '[transform:rotateY(180deg)]' : '',
		'hover:text-cyan-500 transition-colors',
	].join(' ')

	const { play } = useAudio({ path: audioPath })

	return (
		<button
			{...props}
			onClick={(e) => {
				props.onClick?.(e)
				play()
			}}
			className={classNames}
		>
			<Icon className="h-auto w-16" name="atAt" />
		</button>
	)
}
