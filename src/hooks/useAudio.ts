import { useCallback, useEffect, useRef } from 'react'

type UseAudio = {
	path: string
	volume?: number
	multipleSound?: boolean
}

export const useAudio = ({ path, volume, multipleSound }: UseAudio) => {
	const audioRef = useRef<HTMLAudioElement | null>(null)
	const createAudioNode = useCallback(() => {
		audioRef.current = document.createElement('audio')
		document.body.append(audioRef.current)
		audioRef.current.src = path
		const currentRef = audioRef.current

		if (volume) {
			audioRef.current.volume = volume
		}

		if (multipleSound) {
			audioRef.current.onended = () => {
				currentRef.remove()
			}
		}
	}, [path, volume, multipleSound])

	useEffect(() => {
		createAudioNode()

		return () => audioRef.current?.remove()
	}, [createAudioNode])

	const play = () => {
		if (!audioRef.current) return
		if (multipleSound) {
			createAudioNode()
		}

		audioRef.current.pause()
		audioRef.current.currentTime = 0
		audioRef.current.play()
	}

	return {
		play,
		audioRef,
	}
}
