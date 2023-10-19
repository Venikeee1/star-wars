import { PropsWithChildren } from 'react'

export const Container = ({ children }: PropsWithChildren) => {
	return <div className="mx-auto w-full max-w-4xl px-4">{children}</div>
}
