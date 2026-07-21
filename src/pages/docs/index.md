---
layout: ../../layouts/DocsLayout.astro
title: Introduction
description: What Flect is, what it gives you out of the box, and where to go next.
---

Flect is a lightweight, fully hand-built Astro documentation template. There's no docs framework underneath it — no Starlight, no third-party docs library — just Astro components, plain CSS, and a handful of small scripts. If you can read Astro, you can read (and change) every part of this template.

This very site is the template's own documentation, written using the template. What you're reading right now is dogfood: the example content _is_ the docs.

## What you get

- **Sidebar navigation with groups** — defined in a single typed file, [`src/data/navigation.ts`](/docs/reference/configuration/).
- **An auto-generated table of contents** — built from each page's markdown headings, no manual upkeep.
- **Cmd+K instant search** — powered by [Pagefind](/docs/guides/search/), with a search button in the header, a keyboard shortcut, and a mobile entry point.
- **A dark/light theme toggle** — persisted in `localStorage` so it survives reloads and new tabs. See [Theming](/docs/guides/theming/).
- **A responsive mobile nav** — the sidebar and table of contents collapse into slide-out panels on small screens.
- **Copy-to-clipboard code blocks** — every fenced code block gets a copy button for free.
- **Satori-generated OG images** — social preview images are rendered per-page at build time, no design tool required.
- **JSON-LD structured data** — breadcrumb and FAQ structured data are emitted automatically for richer search results.
- **An optional terminal-recording player** — [`<PromptCast />`](/docs/guides/terminal-demos/) plays back an asciinema `.cast` file, handy for CLI or dev-tool docs. Delete it if you don't need it.
- **Deploy workflows already wired up** — a GitHub Pages deploy for your main branch and a PR-preview deploy/cleanup workflow. See [Deployment](/docs/reference/deployment/).
- **Biome-based linting and formatting** — one fast tool instead of an ESLint + Prettier combo.

## No framework lock-in

Flect deliberately does not depend on Starlight or any other documentation framework. Pages are plain Astro Markdown files under `src/pages/docs/`, routed automatically by file path. There's no content collection schema to satisfy, no plugin API to learn, and nothing hidden behind a framework abstraction — if you want to change how a page renders, you edit the layout or component directly.

## Next steps

- [Installation](/docs/start/installation/) — clone the template and get it running locally
- [Quick start](/docs/start/quick-start/) — the handful of files to edit to make it yours
