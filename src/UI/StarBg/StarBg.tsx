import { useRef } from 'react'
import { useEffect } from 'react'
// eslint-disable-next-line
//@ts-ignore
import { initStars } from './threeStars'

export const StarBg = () => {
	const ref = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (!ref.current) return

		initStars(ref.current)
		const currentRef = ref.current

		return () => {
			if (!currentRef) return

			currentRef.innerHTML = ''
		}
	}, [])

	return (
		<div
			ref={ref}
			id="data-stars"
			className="pointer-events-none absolute bottom-0 left-0 right-0 top-0 -z-10"
		></div>
	)
}
