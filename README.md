<h1 align="center">Flect</h1>

<p align="center">
	A lightweight, fully custom Astro documentation template — no framework lock-in, just the components you own.
</p>

## Why This Template

Most docs sites reach for a framework like Starlight or Docusaurus and inherit everything that comes with it: a plugin system to learn, a theme to fight, and components you don't fully control.

Flect is the opposite bet. It started as the hand-built docs site for a Rust CLI, and it's every component written from scratch — sidebar, search, theming, code blocks, OG images — with nothing hidden behind a framework abstraction. You get:

- No framework lock-in — it's Astro pages and components you can read top to bottom in an afternoon
- Full control over markup, styling, and behavior of every piece
- Search, theming, and deployment still ship out of the box, so you're not rebuilding the basics

## What You Get

- Sidebar navigation with an auto-generated table of contents
- Pagefind-powered instant search (`Cmd+K` / `Ctrl+K`)
- Dark/light theme with persisted user preference
- Responsive mobile navigation
- Copy-to-clipboard code blocks
- Satori-generated OG images at build time
- JSON-LD structured data (breadcrumb and FAQ schema) for richer search results
- Optional asciinema terminal-cast player for recorded CLI demos
- GitHub Pages deployment workflow, with PR preview deploys
- Biome for linting and formatting

## Quick Start

1. Clone the repository.
2. Install dependencies.
3. Run the dev server.

```bash
npm install
npm run dev
```

Then open http://localhost:4321/flect

## Commands

| Command | Description |
|---|---|
| `npm run dev` | Start local dev server |
| `npm run build` | Build production site + Pagefind search index |
| `npm run preview` | Preview production build |
| `npm run typecheck` | Type-check with `tsc --noEmit` |
| `npm run check` | Run Biome checks |
| `npm run check:all` | Lint, format-check, and typecheck |
| `npm run format` | Format the codebase with Biome |
| `npm run lint` | Lint with Biome |

## Customization Guide

Update these files first:

- `src/config.ts`: site name, tagline, description, GitHub links, theme color, analytics config
- `src/data/navigation.ts`: sidebar navigation structure
- `src/pages/docs/*`: your documentation content, as Markdown pages
- `src/styles/global.css`: theme, typography, and color tokens
- `public/logo-light.svg`, `public/logo-dark.svg`, `public/favicon.svg`: branding assets

## Analytics (optional)

[Umami](https://umami.is) analytics is built in and disabled by default — no tracking ID is committed. To enable it, set the `PUBLIC_UMAMI_WEBSITE_ID` environment variable to your own Umami website ID:

- Locally: add `PUBLIC_UMAMI_WEBSITE_ID=your-id` to a `.env` file.
- On GitHub Pages: add it as an Actions secret/variable, passed through to the build.

Self-hosting Umami? Override the script URL with `PUBLIC_UMAMI_SRC`. Leave the ID unset to keep analytics off.

## Deployment

This repo is ready for GitHub Pages.

- `main` branch deploys via the publish workflow under `.github/workflows/`
- Pull requests deploy preview sites under `pr-previews/<PR_NUMBER>` via the preview workflow under `.github/workflows/`

Base path defaults to `/flect` (configured in `astro.config.mjs` via the `BASE_PATH` environment variable), and PR previews build with `BASE_PATH` set to `/flect/pr-previews/<PR_NUMBER>/`.

## Project Structure

```text
src/
	components/      Reusable UI components (nav, search, TOC, code blocks)
	data/            Navigation structure
	layouts/         Base and docs page layouts
	lib/             Shared helpers (paths, etc.)
	pages/           Route files, including og.png.ts and robots.txt.ts
	pages/docs/      Markdown documentation pages (routed automatically)
	styles/          Global styles and theme tokens
	types/           Ambient type declarations
	utils/           Utility helpers (OG image generation, etc.)
public/
	casts/           asciinema recordings for the terminal-cast player
	logo-light.svg, logo-dark.svg, favicon.svg   Branding assets
```

## Community

- Contributing guide: [.github/CONTRIBUTING.md](.github/CONTRIBUTING.md)
- Code of conduct: [.github/CODE_OF_CONDUCT.md](.github/CODE_OF_CONDUCT.md)
- Security policy: [.github/SECURITY.md](.github/SECURITY.md)
- Pull request template: [.github/PULL_REQUEST_TEMPLATE.md](.github/PULL_REQUEST_TEMPLATE.md)

## Feedback & Suggestions

If you have any suggestions/feedback, you can contact me via [my email](contact@shravangoswami.com). Alternatively, feel free to open an issue if you find bugs or want to request new features.

## License

Licensed under the MIT [LICENSE](LICENSE), Copyright © 2026
