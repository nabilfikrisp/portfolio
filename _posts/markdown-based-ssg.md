---
title: "Building a Blog with Next.js 15 SSG and Markdown"
excerpt: "A practical guide to static site generation - what works, what doesn't, and when to choose this approach"
coverImage: "/assets/blogs/hello-world/cover.webp"
date: "2025-09-09T12:00:00.000Z"
author:
  name: "nabilfikrisp"
  picture: "/assets/profile.png"
ogImage:
  url: "/assets/blogs/hello-world/cover.webp"
---

Static Site Generation (SSG) with Next.js transforms how we think about content-driven websites. Instead of processing Markdown on every request, you do it once at build time. The result? Lightning-fast sites with perfect SEO.

Here's what I learned building my first SSG blog and the trade-offs you should consider.

---

## The Core Concept

**SSG is pre-compilation for content.**  
`Source (MD) → HTML{:tsx}` at build time = faster sites, better SEO.

**FrontMatter provides structured metadata.**  
YAML blocks in `.md{:bash}` files let you define title, date, author without mixing it into content.

The beauty is in the separation: content lives in files, code handles the pipeline.

---

## Solving the Core Challenge

**The problem:** How do you turn a folder of `.md{:bash}` files into a working blog?

**The solution breaks into three parts:**

1. **File-based routing** - `blogs/[slug]/page.tsx{:bash}` matches any URL
2. **Build-time discovery** - `generateStaticParams(){:tsx}` tells Next.js all possible slugs
3. **Content pipeline** - Read file → Parse metadata → Convert Markdown → Render HTML

Next.js handles routing complexity. You just provide content and tell it what pages exist.

---

## The Mental Model

```
_posts/hello-world.md → /blogs/hello-world
```

Three functions handle everything:

- `getPostSlugs(){:tsx}` - What files exist?
- `getPostBySlug(){:tsx}` - Get specific file content + metadata
- `markdownToHtml(){:tsx}` - Transform content for display

**The pattern:** Separate data fetching from data transformation from rendering.

---

## Implementation Patterns

**File system as database:**

```tsx
const postsDirectory = join(process.cwd(), "_posts");
const slugs = fs.readdirSync(postsDirectory);
```

**Metadata extraction:**

```tsx
const { data, content } = matter(fileContents);
return { ...data, slug: realSlug, content } as Post;
```

**Build-time page generation:**

```tsx
export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}
```

**Markdown to HTML transformation:**

```tsx
import { remark } from "remark";
import html from "remark-html";

export default async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}
```

This works because `remark{:bash}` parses Markdown into AST, then `remark-html{:bash}` converts AST to HTML. It's a clean, extensible pipeline you can add plugins to later.

---

## Understanding the Trade-offs

### ✅ What You Gain

**Performance benefits:**

- Lightning-fast page loads (pre-built HTML serves instantly)
- Perfect SEO (search engines get complete HTML)
- Zero runtime database queries
- Deploy anywhere (CDN, static hosting)
- Excellent Core Web Vitals

**Developer experience:**

- Simple mental model (files become pages)
- Version control for content (Git tracks everything)
- Type safety (frontmatter becomes TypeScript interfaces)
- No database setup or maintenance
- Local development without external dependencies

### ❌ What You Give Up

**Dynamic limitations:**

- Content updates require full rebuild and redeploy
- No real-time features (comments, likes, live search)
- Same content for every visitor (no personalization)
- Writers need Git/Markdown knowledge
- No WYSIWYG editing experience

**Scalability concerns:**

- Build time grows linearly with content volume
- Large images bloat Git repository
- Small typo fixes trigger entire site rebuilds
- Memory usage during builds can be substantial

### 🤔 When This Approach Shines

**Perfect for:**

- Personal blogs and portfolios
- Documentation sites
- Marketing websites
- Company blogs with technical writers
- Content updated weekly or monthly
- Sites prioritizing speed and SEO

**Struggles with:**

- E-commerce (frequent inventory changes)
- Social platforms (user-generated content)
- News sites (hourly updates)
- User dashboards (personalized content)
- Real-time collaboration tools

**The sweet spot:** Developer-authored content that prioritizes performance over real-time updates.

---

## Common Gotchas

**`dangerouslySetInnerHTML`** - The name warns you it bypasses React's XSS protection. Safe here because you control the Markdown source, but be cautious with user-generated content.

**`matter(){:bash}` library** - Elegantly splits files into metadata and content:

- Before: One string with YAML + Markdown mixed
- After: `{ data: {...}, content: "markdown here" }`

**Build vs runtime** - Remember that file system operations happen at build time, not when users visit your site.

---

## The Bigger Picture

SSG isn't just about performance. It's about **separating content from code**. Writers focus on content in familiar formats, developers handle the technical pipeline.

This approach works brilliantly when you can accept the build-time workflow. It's not inherently better or worse than a traditional CMS. Just different trade-offs optimized for different use cases.

Choose SSG when you want developer-friendly content management, exceptional performance, and can work within the constraints of static generation.

---

## References

- [Next.js Blog Starter Repo](https://github.com/vercel/next.js/tree/canary/examples/blog-starter) - Official example that demonstrates these patterns
- [My implementation](https://github.com/nabilfikrisp/portfolio) - Working code for this blog
