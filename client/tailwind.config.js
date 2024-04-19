/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		screens: {
			xl: '1440px',
			md: '1024px',
			xs: '740px',
			xss: '430px',
		},
		extend: {},
		colors: {
			'main-white': 'hsla(0, 0%, 100%, 1)',
			'main-black': 'hsla(0, 0%, 0%, 1)',
			'main-gray': 'hsla(348, 0%, 70%, 1)',
			'main-red': 'hsla(10, 100%, 52%, 1)',
			'main-green': 'hsla(150, 100%, 50%, 1)',
		},
	},
	plugins: [],
}
