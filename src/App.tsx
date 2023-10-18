import './App.css'
import { Container } from './UI/Container/Container'
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
		</div>
	)
}

export default App
