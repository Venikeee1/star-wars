/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: ({ colors }) => ({ ...colors, primary: '#1a1d27' }),
		extend: {
			animation: {
				glove: 'glove 3s ease-in-out infinite',
			},
			keyframes: {
				glove: {
					'0%, 100%': { filter: 'drop-shadow(0px 1px 1px rgb(6, 182, 212))' },
					'50%': { filter: 'drop-shadow(0px 1px 8px rgb(6, 182, 212))' },
				},
			},
		},
	},
	plugins: [],
}
