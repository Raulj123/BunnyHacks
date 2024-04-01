/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	daisyui: {
		themes: ['cupcake']
	},
	theme: {
		extend: {}
	},

	plugins: [require('daisyui')]
};

module.exports = config;
