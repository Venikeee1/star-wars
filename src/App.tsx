import './App.css'
import { Container } from './UI/Container/Container'
import { Footer } from './UI/Footer/Footer'
import { Header } from './UI/Header/Header'
import { PeopleTable } from './features/starWars/components/PeopleTable'

function App() {
	return (
		<div className="flex min-h-[100svh] flex-col">
			<Header />
			<main className="flex flex-1 items-center">
				<Container>
					<PeopleTable />
				</Container>
			</main>
			<Footer />
		</div>
	)
}

export default App
