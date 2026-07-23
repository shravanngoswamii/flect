# Flect

Flect is an Astro documentation + blog template. The pitch: every piece — sidebar, search, theming, code blocks, OG images, pager — is hand-written and sitting in `src/`, not hidden behind a plugin API. See `src/pages/index.astro` for the full marketing philosophy; this file is about actually working in the codebase.

## Architecture

- **Content**: Markdown lives in top-level `docs/` and `blog/` folders (not under `src/`), loaded via Astro Content Collections (`src/content.config.ts`, using `glob()` from `astro/loaders`). Docs schema: `title`, `description`. Blog schema adds `pubDate`, `updatedDate`, `tags`, `heroImage`.
- **Routing**: `src/pages/docs/[...slug].astro` and `src/pages/blog/[...slug].astro` are the only two routes that render content — one dynamic route per collection, layout applied once, no per-file frontmatter `layout:` path to hand-maintain.
- **Layouts**: `BaseLayout.astro` (nav, footer, theme picker, search modal, global scripts) wraps everything; `DocsLayout.astro` adds the sidebar/TOC/prev-next pager; `BlogPost.astro` adds the blog-specific TOC/share links/back-to-top.
- **Theming**: `src/utils/themes.ts` is the single source of truth for all themes — 42 at last count, but marketing copy says "40+" so it doesn't need touching every time one is added (Flect default + 12 color families × light/dark + 8 signature families × light/dark like Dracula/Nord/Gruvbox; every family must exist in BOTH modes). `buildTokens()` derives a full token set from a 4-color seed; `buildThemesCss()` generates the CSS for every non-default theme at build time, embedded once in `BaseLayout.astro` via `<style set:html>`. The Flect default theme itself is hand-tuned CSS in `global.css`'s `:root` / `:root[data-mode="dark"]`, not generated. `<html>` carries two attributes: `data-mode` (binary light/dark, drives Shiki/asciinema dual-theme switches) and `data-theme` (specific theme id). Generated theme rules match both attributes (`html[data-mode="x"][data-theme="y"]`) to reliably outrank the base `:root[data-mode="dark"]` rule — matching on `data-theme` alone loses that specificity fight.
- **Code blocks**: Shiki dual-theme (`github-light`/`github-dark`, set in `astro.config.mjs`), but the background is overridden to `var(--code-bg)` so it matches whatever theme is active — only the syntax colors come from Shiki's own `--shiki-light`/`--shiki-dark` per-span vars.
- **Search**: Pagefind, indexed post-build (`pagefind --site dist`), wired into the header's search modal.
- **OG images**: generated at build time via Satori (`src/utils/ogImage.ts`, `src/pages/og.png.ts`).
- **Asciinema demos**: `PromptCast.astro` plays a `.cast` recording using a custom `asciinema-player` theme (`theme: 'flect'`) bound to the site's own CSS tokens, so the terminal follows the active theme instead of staying a fixed dark box.
- **Config surface**: `src/config.ts` (site name/tagline/description/GitHub links/theme color/Umami) and `src/data/navigation.ts` (sidebar structure). There's no plugin/integration config schema — this is a template you clone and own, not an installable package.

## Conventions

- **Base path**: the live site deploys under `/flect` (`BASE_PATH` env var in `astro.config.mjs`). Always use `withBase()` (`src/lib/paths.ts`) for internal links — never hardcode a root-relative path — and build with `BASE_PATH=/flect npm run build` before calling anything done, since a plain `npm run build` won't catch base-path bugs.
- **Commits**: one logical change per commit. Concise, casual, lowercase, no prefixes (`feat:`, `fix:`), no emoji, no co-author/trailer lines. If a change touches a shared file (usually `global.css`) alongside an unrelated change, split them — revert to HEAD, reapply one change, diff-check against the intended final state, commit, then reapply the rest.
- **Comments**: default to none. Only write one when the *why* is genuinely non-obvious (a workaround, a hidden constraint) — never to restate what the code already says.
- **No unicode arrow characters** anywhere in the UI (→, ←, etc.) — use inline SVG icons instead.
- **Verify before calling it done**: `npm run typecheck`, `BASE_PATH=/flect npm run build`, `npm run check:all`, and an actual look at the rendered output (headless Chrome/Puppeteer screenshots work fine if browser tools aren't connected) — for anything visual or theme-related, check at least default light/dark plus one or two themes that are actually different (Dracula, Sepia), since a fix can look right by coincidence on the default theme alone and still be broken everywhere else.

## Commands

| Command | What it does |
|---|---|
| `npm run dev` | Local dev server |
| `npm run build` | Production build + Pagefind index |
| `npm run preview` | Preview the production build |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run check` | Biome checks |
| `npm run check:all` | Lint + format-check + typecheck |
| `npm run format` | Biome, writing |
| `npm run lint` | Biome, read-only |

When starting the dev server, use background mode:

```
astro dev --background
```

Manage it with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Deployment

GitHub Pages via `.github/workflows/` — `main` publishes, PRs get a preview under `pr-previews/<PR_NUMBER>/` with `BASE_PATH` adjusted to match.

## Astro documentation

Consult these before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
