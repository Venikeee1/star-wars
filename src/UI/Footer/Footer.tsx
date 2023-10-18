import ChewbaccaSvg from './chewbacca.svg?react'

export const Footer = () => {
	return (
		<footer className="bg-primary px-2 py-4">
			<div className="flex justify-center">
				<ChewbaccaSvg className="inline-block h-auto w-7" />
			</div>
		</footer>
	)
}
