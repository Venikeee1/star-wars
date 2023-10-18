import { useEffect, useRef } from 'react'

type UseAudio = {
	path: string
}

export const useAudio = ({ path }: UseAudio) => {
	const audioRef = useRef<HTMLAudioElement | null>(null)

	useEffect(() => {
		if (!audioRef.current) {
			audioRef.current = document.createElement('audio')
			document.body.append(audioRef.current)
		}

		audioRef.current.src = path

		return () => audioRef.current?.remove()
	}, [path])

	const play = () => {
		if (!audioRef.current) return

		audioRef.current.pause()
		audioRef.current.currentTime = 0
		audioRef.current.play()
	}

	return {
		play,
		audioRef,
	}
}
