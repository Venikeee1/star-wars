import { Outlet } from 'react-router-dom'
import { Header } from '../../../UI/Header/Header'
import { Footer } from '../../../UI/Footer/Footer'
import { StarBg } from '../../../UI/StarBg/StarBg'

export const MainLayout = () => {
	return (
		<div className="relative flex min-h-[100svh] flex-col">
			<StarBg />
			<Header />
			<main className="flex flex-1 flex-col items-center py-7">
				<Outlet />
			</main>
			<Footer />
		</div>
	)
}
