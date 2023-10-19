/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: ({ colors }) => ({ ...colors, primary: '#1a1d27' }),
		extend: {
			animation: {
				glove: 'glove 3s ease-in-out infinite',
				move: 'move 1.8s ease-in-out infinite',
				saber: 'saber 2.5s ease-in-out infinite',
				pulsing: 'pulsing 2.5s ease-in-out infinite',
			},
			keyframes: {
				move: {
					'0%': { left: '-100px' },
					'100%': { left: '100%' },
				},
				glove: {
					'0%, 100%': { filter: 'drop-shadow(0px 1px 1px rgb(6, 182, 212))' },
					'50%': { filter: 'drop-shadow(0px 1px 8px rgb(6, 182, 212))' },
				},
				saber: {
					'0%, 100%': { 'box-shadow': '0 0 4px red' },
					'50%': { 'box-shadow': '0 0 17px red' },
				},
				pulsing: {
					'0%, 100%': { opacity: 1 },
					'50%': { opacity: 0.3 },
				},
			},
		},
	},
	plugins: [],
}
