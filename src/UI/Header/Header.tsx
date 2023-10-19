import { Icon } from '../Icons/Icons'
import { Link } from 'react-router-dom'

export const Header = () => {
	return (
		<header className="sticky top-0 z-50 flex justify-center bg-primary p-4">
			<Link to="/">
				<Icon name="logo" className="h-auto w-[100px]" />
			</Link>
		</header>
	)
}
