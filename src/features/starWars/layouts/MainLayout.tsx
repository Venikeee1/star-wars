import { Outlet } from 'react-router-dom'
import { Header } from '../../../UI/Header/Header'
import { Footer } from '../../../UI/Footer/Footer'
import { StarBg } from '../../../UI/StarBg/StarBg'
import { Button } from '../../../UI/Button/Button'
import { Icon } from '../../../UI/Icons/Icons'
import introMusicPath from '../../../assets/intro.mp3'
import { useAudio } from '../../../hooks/useAudio'
import { useState } from 'react'

export const MainLayout = () => {
	const [exploreMore, setExploreMore] = useState(false)
	const { play } = useAudio({ path: introMusicPath, volume: 0.1 })
	const introClasses = [
		'fixed left-0 top-0 z-[100] flex h-full w-full flex-col',
		exploreMore
			? 'opacity-0 pointer-events-none transition-opacity duration-500'
			: '',
	].join(' ')

	const handleExploreMore = () => {
		play()
		setExploreMore(true)
	}

	return (
		<div className="du relative flex min-h-[100svh] flex-col">
			<div className={introClasses}>
				<img
					src="/poster.jpg"
					className="-z-1 absolute h-full w-full object-cover"
					alt="star wars poster"
				/>
				<div className="z-1 relative m-auto flex w-full max-w-[450px] flex-col justify-center rounded-md bg-primary p-5 pb-7">
					<Icon
						name="logo"
						className="mx-auto -mt-14 mb-4 h-auto w-40 rounded-lg bg-primary px-7 py-5"
					/>
					<div className="mb-6 text-center text-lg">
						Welcome to jedi library. Let the force be with you. Please be aware
						that it is better to surf through site with{' '}
						<span className="text-red-500">sound on!</span>
					</div>
					<div className="mx-auto">
						<Button onClick={handleExploreMore}>Explore</Button>
					</div>
				</div>
			</div>
			{exploreMore && (
				<>
					<StarBg />
					<Header />
					<main className="flex flex-1 flex-col items-center py-7">
						<Outlet />
					</main>
					<Footer />
				</>
			)}
		</div>
	)
}
