<p align="center">
	<picture>
		<source media="(prefers-color-scheme: dark)" srcset="public/logo-dark.svg">
		<img alt="Flect" src="public/logo-light.svg" width="220">
	</picture>
</p>

<p align="center">
	A docs template with no plugin system, no theme to fight, and no "eject" button, because there's nothing to eject from.
</p>

## Why

Starlight and Docusaurus give you a framework: a plugin API to learn, a theme you'll spend a weekend un-styling, components you can't quite reach. Flect gives you an afternoon of reading instead: sidebar, search, theming, code blocks, OG images, all hand-written, all sitting right there in `src/`.

## What's in the box

- Sidebar nav with an auto-generated table of contents
- Instant search via Pagefind (`Cmd+K` / `Ctrl+K`)
- Dark/light plus 40+ themes, every one available in both modes, remembered across visits
- Copy-to-clipboard code blocks that match whatever theme is active
- Satori-generated OG images at build time
- JSON-LD structured data, so search engines get more than a wall of text
- An optional asciinema player for recorded terminal demos
- GitHub Pages deploy workflow with PR previews, already wired up
- Biome for linting and formatting

## Quick start

```bash
npm install
npm run dev
```

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

## Making it yours

Start here:

- `src/config.ts`: name, tagline, description, GitHub links, theme color, analytics
- `src/data/navigation.ts`: sidebar structure
- `docs/*`: your actual docs, as Markdown
- `src/styles/global.css`: every color, font, and spacing token
- `public/logo-light.svg`, `public/logo-dark.svg`, `public/favicon.svg`: swap these out, please, don't ship mine

## Analytics (optional)

[Umami](https://umami.is) is wired in and silent until you give it an ID. Nothing is tracked by default:

- Locally: add `PUBLIC_UMAMI_WEBSITE_ID=your-id` to a `.env` file.
- On GitHub Pages: add it as an Actions secret/variable, passed through to the build.

Self-hosting Umami? Point elsewhere with `PUBLIC_UMAMI_SRC`. Leave the ID unset and it just doesn't run.

## Deployment

Ready for GitHub Pages out of the box.

- `main` deploys via the publish workflow under `.github/workflows/`
- Pull requests get a preview under `pr-previews/<PR_NUMBER>` via the preview workflow

Base path defaults to `/flect` (`BASE_PATH` in `astro.config.mjs`); PR previews build with it set to `/flect/pr-previews/<PR_NUMBER>/`.

## Community

- Contributing guide: [.github/CONTRIBUTING.md](.github/CONTRIBUTING.md)
- Code of conduct: [.github/CODE_OF_CONDUCT.md](.github/CODE_OF_CONDUCT.md)
- Security policy: [.github/SECURITY.md](.github/SECURITY.md)
- Pull request template: [.github/PULL_REQUEST_TEMPLATE.md](.github/PULL_REQUEST_TEMPLATE.md)

## Feedback

Found a bug, want a feature, or just want to say hi? [Open an issue](https://github.com/shravanngoswamii/flect/issues) or [email me](mailto:contact@shravangoswami.com).

## License

MIT © 2026 [Shravan Goswami](https://shravangoswami.com). See [LICENSE](LICENSE).
