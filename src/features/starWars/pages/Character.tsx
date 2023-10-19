import { useParams } from 'react-router-dom'
import { usePersonQuery } from '../starWarsQuery'
import { Container } from '../../../UI/Container/Container'
import { CharacterDetails } from '../components/CharacterDetails'

export const Character = () => {
	const { id } = useParams<{ id: string }>()
	const { data, isError, isLoading } = usePersonQuery(id ?? '')

	if (isLoading) {
		return <Container>...loading</Container>
	}

	if (isError) {
		return <Container>...loading</Container>
	}

	if (!data) {
		return <Container>No data with such id: {id}</Container>
	}

	return <CharacterDetails id={id ?? ''} character={data} />
}
