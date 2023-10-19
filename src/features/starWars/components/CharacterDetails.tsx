import { Container } from '../../../UI/Container/Container'
import { PersonDTO } from '../starWars.types'

type CharacterDetailsProps = {
	character: PersonDTO
}

export const CharacterDetails = ({ character }: CharacterDetailsProps) => {
	const { name } = character
	return (
		<section>
			<Container>
				<img src="" alt="character photo" />
				<section>name: {name}</section>
			</Container>
		</section>
	)
}
