export const siteConfig = {
	name: "Flect",
	tagline: "A lightweight, fully custom Astro documentation template.",
	description:
		"Flect is a hand-built Astro documentation template with sidebar navigation, instant search, dark mode, and optional terminal-cast demos — no framework lock-in.",
	githubUrl: "https://github.com/shravanngoswamii/flect",
	githubSponsorsUrl: "https://github.com/sponsors/shravanngoswamii",
	themeColor: {
		light: "#14724b",
		dark: "#101413",
	},
	umami: {
		src: import.meta.env.PUBLIC_UMAMI_SRC ?? "https://cloud.umami.is/script.js",
		websiteId: import.meta.env.PUBLIC_UMAMI_WEBSITE_ID ?? "",
	},
};
