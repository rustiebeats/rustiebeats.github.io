# rustiebeats.github.io

Personal blog built with [Eleventy (11ty)](https://11ty.dev) and deployed to GitHub Pages.

## Local Development

```bash
npm install
npm run server   # http://localhost:8080 with live reload
npm run build    # Build to _site/
npm run clean    # Remove _site/
```

## Adding a New Post

Create a file in `src/posts/` with a `.md` extension:

```markdown
---
title: My Post Title
date: 2024-06-01
tags:
  - posts
  - javascript
---

Your content here.
```

The URL will be automatically generated as `/YYYY/MM/DD/my-post-title/`.

## Changing Site Config

Edit `src/_data/site.js` to update:

| Field | Description |
|---|---|
| `title` | Browser tab / OG title |
| `header_title` | Text shown in the site header |
| `owner` | Name shown on homepage |
| `info` / `desc` | Tagline shown on homepage |
| `menu` | Nav links (key = label, value = URL) |
| `tcolor` | Accent color (hex without `#`, e.g. `0FA0CE`) |
| `max_post` | Number of recent posts shown on homepage |
| `github` / `linkedin` / `twitter` / `instagram` | Social links in footer (leave empty to hide) |
| `url` | Full site URL for OG/Twitter meta tags |

## Changing the Theme

- **Colors / fonts / layout**: `src/css/custom.css`
- **Page structure**: `src/_includes/layouts/base.njk`
- **Header / footer**: `src/_includes/partials/header.njk`, `footer.njk`
- **Post template**: `src/_includes/layouts/post.njk`
- **Homepage**: `src/index.njk`
- **All posts page**: `src/blog/index.njk`

## Adding Static Assets

Drop files into:
- `src/images/` — images (reference as `/images/filename.jpg`)
- `src/css/` — stylesheets
- `src/js/` — scripts

## Deployment

Pushing to `main` triggers a GitHub Actions workflow that builds the site and deploys to the `gh-pages` branch. GitHub Pages serves from that branch.
