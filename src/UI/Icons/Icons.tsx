import LogoSvg from './logo.svg?react'
import AtAtSvg from './at-at.svg?react'
import YodaSvg from './yoda.svg?react'

const icons = {
	logo: LogoSvg,
	atAt: AtAtSvg,
	yoda: YodaSvg,
}

type IconsProps = {
	className?: string
	name: keyof typeof icons
}

export const Icon = ({ name, className }: IconsProps) => {
	const Icon = icons[name]
	return <Icon className={className} />
}
