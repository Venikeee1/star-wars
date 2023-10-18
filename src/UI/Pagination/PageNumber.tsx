import { ComponentProps } from 'react'
import StormIcon from './storm.svg?react'
import audioPath from './assets/blaster.mp3'
import { useAudio } from '../../hooks/useAudio'

type PageNumberProps = ComponentProps<'button'> & {
	isActive: boolean
}
export const PageNumber = ({
	children,
	isActive,
	...props
}: PageNumberProps) => {
	const classNames = [
		isActive ? 'text-cyan-500 animate-glove ' : '',
		'mx-2 relative transition-colors hover:text-cyan-500',
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
			<span className="absolute left-0 right-0 m-0 mx-auto w-fit rounded-full bg-primary p-1 leading-4">
				{children}
			</span>
			<StormIcon className="h-auto w-12" />
		</button>
	)
}
