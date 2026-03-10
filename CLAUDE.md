# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Practices

Use Red/Green TDD.

## Commands

```bash
npm run server    # Start local dev server with live reload
npm run build     # Generate static files to _site/
npm run clean     # Remove _site/ directory
```

New post: create `src/posts/my-post-title.md` with front matter (see below).

## Architecture

This is an **11ty (Eleventy) v3** static blog deployed to GitHub Pages at `rustiebeats.github.io`.

- `src/posts/` — Markdown posts
- `src/` — Nunjucks page templates (`index.njk`, `blog/index.njk`)
- `src/_includes/layouts/` — base.njk, post.njk, page.njk
- `src/_includes/partials/` — header.njk, footer.njk
- `src/_data/site.js` — site-wide config (title, owner, menu, theme color, social links)
- `src/css/`, `src/fonts/`, `src/images/`, `src/js/` — static assets (passthrough copied)
- `_site/` — generated output (not committed)

### Config: `.eleventy.js`

Sets input=`src`, output=`_site`. Passthrough copies static assets. Defines `posts` collection (reverse-chronological). Adds `dateFormat` and `head` filters.

### Posts

`src/posts/posts.11tydata.js` provides default layout (`layouts/post.njk`), tag (`posts`), and a computed date-based permalink: `YYYY/MM/DD/slug/`.

Post front matter:
```yaml
---
title: My Post Title
date: 2024-01-15
tags:
  - posts
  - optional-tag
---
```

### Theme

CSS uses the Skeleton framework (12-column grid, 550px breakpoint). Dark mode is toggled via `body.darkmode` class with localStorage persistence. Accent color is set from `site.tcolor` as an inline `<style>` block in `base.njk`. Theme config lives in `src/_data/site.js`.

### Deployment

GitHub Actions (`.github/workflows/build.yml`) builds with Node 20 and deploys `_site/` to the `gh-pages` branch via `peaceiris/actions-gh-pages`. GitHub Pages is configured to serve from the `gh-pages` branch.
