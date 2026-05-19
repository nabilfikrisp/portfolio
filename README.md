# nabilfikrisp's Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)](https://tailwindcss.com)
[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare_Pages-F38020?logo=cloudflare)](https://pages.cloudflare.com)

Fully-static portfolio with a markdown-driven blog. Built with Next.js, TypeScript, and Tailwind CSS.

## Quick Start

```bash
pnpm install
pnpm dev       # → http://localhost:3000
pnpm build     # static export → out/
```

## Blog

Every post starts as a plain markdown file in `_posts/` with YAML frontmatter — no database, no CMS, no server. At build time, Next.js reads each file, parses the frontmatter via gray-matter, and pipes the markdown through unified → remark → rehype → Shiki for syntax highlighting. The result is a fully static HTML page, pre-rendered and ready for Cloudflare Pages' edge network. To publish, just commit a `.md` file and rebuild.

## Features

| Section / Feature | Description |
|---|---|
| Portfolio | Hero, about, experience, skills, projects |
| Blog | Markdown-driven SSG with Shiki syntax highlighting — see [Blog](#blog) |
| Theming | Dark/light toggle via next-themes |
| SEO | Sitemap, robots.txt, Open Graph, Twitter cards, Google Search Console |
| Misc | Responsive design, custom 404 page |

## Tech Stack

- **Next.js** 16 — App Router, static export (`output: "export"`)
- **TypeScript** 6 — strict mode
- **Tailwind CSS** 4 — CVA, clsx, tailwind-merge
- **Blog Pipeline** — gray-matter, js-yaml, unified, remark, rehype, shiki
- **UI** — Radix UI primitives, Lucide React
- **Fonts** — Outfit, Plus Jakarta Sans, Noto Serif Georgian, JetBrains Mono
- **Tooling** — pnpm, Turbopack, ESLint, Prettier
- **Deployment** — Cloudflare Pages

## Project Structure

```
_posts/       Blog posts (markdown + YAML frontmatter)
src/
  app/        Next.js App Router pages
  components/ Shared components
  lib/        Utilities, data, types, blog service
public/       Static assets
```

## Contact

mnabilfikrisp@gmail.com

## License

MIT
