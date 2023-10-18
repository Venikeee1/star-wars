import './App.css'
import { Container } from './UI/Container/Container'
import { Footer } from './UI/Footer/Footer'
import { Header } from './UI/Header/Header'
import { StarWarsCharacters } from './features/starWars/components/StarWarsCharacters'

function App() {
	return (
		<div className="relative flex min-h-[100svh] flex-col">
			<Header />
			<main className="flex flex-1 items-center py-7">
				<Container>
					<StarWarsCharacters />
				</Container>
			</main>
			<Footer />
		</div>
	)
}

export default App
