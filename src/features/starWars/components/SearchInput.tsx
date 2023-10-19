import { ComponentProps } from 'react'
import { useAudio } from '../../../hooks/useAudio'
import audioPath from '../../../assets/you-seek-yoda.mp3'
import { Icon } from '../../../UI/Icons/Icons'

type SearchInputProps = ComponentProps<'input'>

export const SearchInput = (props: SearchInputProps) => {
	const { play } = useAudio({ path: audioPath })

	return (
		<div className="relative mb-2">
			<div className="relative w-80 transition-[width] duration-300 focus-within:w-full">
				<Icon
					name="yoda"
					className="absolute bottom-0 right-2 top-0 my-auto h-[80%] w-auto"
				/>
				<input
					type="text"
					{...props}
					placeholder="Search your force"
					className="font text-md w-full border-spacing-2 rounded-md py-3 pl-2 pr-10"
					onFocus={() => {
						play()
					}}
				/>
			</div>
		</div>
	)
}
