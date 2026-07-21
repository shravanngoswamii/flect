---
layout: ../../../layouts/DocsLayout.astro
title: Writing docs
description: How pages, frontmatter, headings, and callouts work in Flect.
---

## Pages are routes, automatically

Every `.md` file under `src/pages/docs/` becomes a real page, routed based on its folder path. There's no content collection to define and no registration step — Astro's built-in Markdown pages handle the routing for you.

For example:

- `src/pages/docs/index.md` → `/docs/`
- `src/pages/docs/guides/writing-docs.md` → `/docs/guides/writing-docs/`
- `src/pages/docs/reference/configuration.md` → `/docs/reference/configuration/`

Add a new file in the right folder and the route just exists — nothing else to wire up on the routing side. (You do still need a sidebar entry — see [Updating the sidebar](#updating-the-sidebar) below.)

## Required frontmatter

Every docs page needs three frontmatter fields:

```md
---
layout: ../../../layouts/DocsLayout.astro
title: Your page title
description: A one-sentence summary shown under the title and used for the OG image.
---
```

`layout` is a relative path to `DocsLayout.astro`, so the number of `../` segments depends on how deep the file lives:

| File location | `layout` value |
| --- | --- |
| `src/pages/docs/index.md` | `../../layouts/DocsLayout.astro` |
| `src/pages/docs/<section>/<page>.md` | `../../../layouts/DocsLayout.astro` |

`title` and `description` both show up in the page header, in the browser tab title, in the generated OG image, and in the JSON-LD breadcrumb data — so keep them short and accurate.

## Headings populate the table of contents

The right-hand table of contents on every docs page is generated automatically from the page's Markdown headings — you don't maintain it by hand. Just write normal `##` and `###` headings and they'll appear in order.

## Callouts

Wrap a paragraph in a `<div>` with class `callout note` or `callout warning` to render a styled admonition box (the styles already exist in `src/styles/global.css`):

```md
<div class="callout note">
Notes are for helpful context that isn't essential to follow the main instructions.
</div>

<div class="callout warning">
Warnings are for things that can break a build or cause data loss if skipped.
</div>
```

## Updating the sidebar

Adding a page doesn't automatically add it to navigation. You also need a matching entry in `src/data/navigation.ts` — inside the right `NavGroup`'s `items` array — or the page will be reachable by direct URL but invisible in the sidebar. See the [Configuration reference](/docs/reference/configuration/) for the exact shape of that file.
