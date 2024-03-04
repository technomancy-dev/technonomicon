import defaultTheme from 'tailwindcss/defaultTheme'
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				serif: ['Young Serif', ...defaultTheme.fontFamily.serif],
				lithops: ["Lithops", 'Young Serif', ...defaultTheme.fontFamily.serif],
			},
		},
	},
	plugins: [],
}
