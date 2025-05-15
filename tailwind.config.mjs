/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				primary: {
					50: "#eefbff",
					100: "#d6f5ff",
					200: "#b5edff",
					300: "#7ce2ff",
					400: "#36d4ff",
					500: "#06bef8",
					600: "#0298d6",
					700: "#0679aa",
					800: "#0b638c",
					900: "#115374",
				},
				secondary: {
					50: "#fdf4ff",
					100: "#fae8ff",
					200: "#f5d0fe",
					300: "#f0abfc",
					400: "#e879f9",
					500: "#d946ef",
					600: "#c026d3",
					700: "#a21caf",
					800: "#86198f",
					900: "#701a75",
				},
			},
			animation: {
				"fade-in": "fadeIn 0.5s ease-in-out",
				"slide-up": "slideUp 0.5s ease-out",
			},
			keyframes: {
				fadeIn: {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
				slideUp: {
					"0%": { transform: "translateY(20px)", opacity: "0" },
					"100%": { transform: "translateY(0)", opacity: "1" },
				},
			},
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				light: {
					...require("daisyui/src/theming/themes").light,
					primary: "#06bef8",
					secondary: "#d946ef",
					accent: "#0298d6",
					"base-100": "#ffffff",
					"base-200": "#f0f9ff",
					"base-300": "#e0f2fe",
				},
			},
		],
	},
};
