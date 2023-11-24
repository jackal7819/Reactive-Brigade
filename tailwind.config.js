/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				body: ['Montserrat', 'sans-serif'],
				heading: ['Russo One', 'sans-serif'],
			},
			colors: {
				green: '#375219',
				orange: '#F7732A',
				black: '#2D362E',
			},
			backgroundImage: {
				share: "url('./assets/share.jpg')",
				goalBgImg: "url('./assets/bg-image.jpg')",
			},
			maxWidth: {
				'230px': '230px'
			},
			screens: {
				'tablet-850': {'max': '850px'},
			}
		},
	},
	plugins: [],
};
