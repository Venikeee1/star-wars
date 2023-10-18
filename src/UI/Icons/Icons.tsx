import LogoSvg from './logo.svg?react'
import AtAtSvg from './at-at.svg?react'

const icons = {
	logo: LogoSvg,
	aTaT: AtAtSvg,
}

type IconsProps = {
	className?: string
	name: keyof typeof icons
}

export const Icon = ({ name, className }: IconsProps) => {
	const Icon = icons[name]
	return <Icon className={className + ' text-white'} />
}
