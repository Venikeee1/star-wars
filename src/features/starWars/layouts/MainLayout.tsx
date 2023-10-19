import { Outlet } from 'react-router-dom'
import { Header } from '../../../UI/Header/Header'
import { Footer } from '../../../UI/Footer/Footer'

export const MainLayout = () => {
	return (
		<div className="relative flex min-h-[100svh] flex-col">
			<Header />
			<main className="flex flex-1 flex-col items-center py-7">
				<Outlet />
			</main>
			<Footer />
		</div>
	)
}
