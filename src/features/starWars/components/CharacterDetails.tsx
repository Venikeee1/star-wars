import { PropsWithChildren } from 'react'
import { Container } from '../../../UI/Container/Container'
import { PersonDTO } from '../starWars.types'
import { CharacterAttribute } from './CharacterAttribute'

type CharacterDetailsProps = {
	character: PersonDTO
	id: string
}

export const CharacterDetails = ({ character, id }: CharacterDetailsProps) => {
	const {
		name,
		birth_year,
		gender,
		eye_color,
		height,
		films,
		skin_color,
		hair_color,
		mass,
		homeworld,
		species,
	} = character
	const imgSrc = `/public/${id}.jpg`

	return (
		<section className="max-w-[500px] md:w-full md:max-w-none">
			<Container>
				<div className="gap-6 rounded-lg bg-primary p-4 md:flex">
					<img
						src={imgSrc}
						alt="character photo"
						className="mb-5 w-full rounded-md md:mb-0 md:w-7/12"
					/>
					<div className="w-full md:w-7/12">
						<CharacterAttribute label="Name:">{name}</CharacterAttribute>
						<CharacterAttribute label="Birth year:">
							{birth_year}
						</CharacterAttribute>
						<CharacterAttribute label="Gender:">{gender}</CharacterAttribute>
						<CharacterAttribute label="Mass:">{mass}</CharacterAttribute>
						<CharacterAttribute label="Homeworld:">
							<Anchor href={homeworld}>{homeworld}</Anchor>
						</CharacterAttribute>
						<CharacterAttribute label="Skin color:">
							{skin_color}
						</CharacterAttribute>
						<CharacterAttribute label="Hair color:">
							{hair_color}
						</CharacterAttribute>
						<CharacterAttribute label="Eye color:">
							{eye_color}
						</CharacterAttribute>
						<CharacterAttribute label="Height:">{height}</CharacterAttribute>
						<CharacterAttribute label="Species:">
							{species.map((filmLink) => (
								<Anchor href={filmLink}>{filmLink}</Anchor>
							))}
						</CharacterAttribute>
						<CharacterAttribute label="Films:">
							{films.map((filmLink) => (
								<Anchor href={filmLink}>{filmLink}</Anchor>
							))}
						</CharacterAttribute>
					</div>
				</div>
			</Container>
		</section>
	)
}

const Anchor = ({ href, children }: PropsWithChildren<{ href: string }>) => {
	return (
		<a href={href} className="underline hover:text-[#06b6d4]">
			{children}{' '}
		</a>
	)
}
