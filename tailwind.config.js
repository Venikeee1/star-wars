/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: ({ colors }) => ({ ...colors, primary: '#1a1d27' }),
		extend: {},
	},
	plugins: [],
}
