import {
	createBrowserRouter,
	RouterProvider as Provider,
} from 'react-router-dom'
import { Homepage } from '../features/starWars/pages/Homepage'
import { Character } from '../features/starWars/pages/Character'
import { MainLayout } from '../features/starWars/layouts/MainLayout'

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{ index: true, element: <Homepage /> },
			{
				path: '/character/:id',
				element: <Character />,
			},
		],
	},
])

export const RouterProvider = () => {
	return <Provider router={router} />
}
