# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run server    # Start local dev server (with BrowserSync live reload)
npm run build     # Generate static files to public/
npm run clean     # Clear cache and public/ directory
npm run deploy    # Build and deploy to GitHub Pages (rustiebeats.github.io)
```

New post: `npx hexo new post "Post Title"` — creates `source/_posts/Post-Title.md` with an asset folder.
New draft: `npx hexo new draft "Draft Title"` — creates `source/_drafts/Draft-Title.md`.
Publish draft: `npx hexo publish draft "Draft Title"`

## Architecture

This is a **Hexo 6** static blog deployed to GitHub Pages at `rustiebeats.github.io`.

- `source/_posts/` — published Markdown posts
- `source/_drafts/` — unpublished drafts (`render_drafts: false` in `_config.yml`)
- `themes/minima/` — custom theme (EJS templates + CSS)
- `public/` — generated output (not committed)

### Theme: minima

The theme uses EJS templates. Key files:
- `themes/minima/layout/layout.ejs` — base HTML shell; loads CSS, nanobar, GA, partials
- `themes/minima/layout/partial/header.ejs` / `footer.ejs` — nav and social links
- `themes/minima/layout/post.ejs`, `index.ejs`, `archive.ejs`, `tag.ejs`, `page.ejs`
- `themes/minima/source/css/custom.css` — primary styling (skeleton CSS framework base)
- `themes/minima/_config.yml` — theme settings: title, owner, menu, accent color (`tcolor`), social links, max posts on index

### Configuration

Two config files:
- `_config.yml` — site-level: URL (`https://rustiebeats.github.io/`), deploy target, prism.js syntax highlighting, permalink format
- `themes/minima/_config.yml` — theme-level: header title, nav menu, accent color, footer social links

### Deployment

Deploys via `hexo-deployer-git` to `git@github.com:rustiebeats/rustiebeats.github.io.git` (branch: `master`). Run `npm run deploy` after changes.

### Post Front Matter

```yaml
---
title: Post Title
date: 2024-01-01
tags: [tag1, tag2]
thumbnail: /images/image.jpg  # optional, used for OG/Twitter cards
---
```
