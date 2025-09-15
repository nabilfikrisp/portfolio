---
title: "Syntax Highlight with shiki"
excerpt: "Adding beautiful, performant code highlighting to your Next.js SSG blog with Shiki"
coverImage: "/assets/blogs/syntax-highlight-with-shiki/cover.webp"
date: "2025-09-15T12:00:00.000Z"
author:
  name: "nabilfikrisp"
  picture: "/assets/profile.png"
ogImage:
  url: "/assets/blogs/syntax-highlight-with-shiki/cover.webp"
---

After [building my SSG blog with Next.js and Markdown](/blogs/markdown-based-ssg), I needed proper syntax highlighting for code blocks. Plain text code looks unprofessional and hurts readability. Enter Shiki, the same highlighter that powers VS Code.

Here's how I integrated Shiki into my existing markdown pipeline and the implementation decisions that matter.

---

## The Core Problem

**Basic remark-html produces unstyled code blocks.**  
Without syntax highlighting, code is just plain text wrapped in `<pre><code>{:html}` tags. Readers lose context, and your technical content looks amateurish.

**Shiki provides VS Code-quality highlighting.**  
It uses the same tokenizer and themes as VS Code, ensuring accurate highlighting for dozens of languages with beautiful, familiar themes.

The key insight: integrate highlighting into your markdown processing pipeline, not as a client-side afterthought.

---

## Why Shiki Over Alternatives

**The problem with client-side highlighting:**

- Prism.js and highlight.js add runtime JavaScript
- Flash of unstyled content (FOUC) on page load
- Extra bundle size sent to every visitor

**Shiki's advantage:**

- Build-time highlighting produces static HTML
- No client-side JavaScript required
- Perfect theme consistency
- Zero runtime performance impact

**The trade-off:** Longer build times for better user experience.

---

## The Implementation

**Replacing the basic markdown processor:**

```typescript
// Before: Basic remark setup
import { remark } from "remark";
import html from "remark-html";

export default async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}
```

**After: Shiki-powered highlighting:**

```typescript
import rehypeShikiFromHighlighter from "@shikijs/rehype/core";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { createHighlighter } from "shiki/bundle/web";
import { createOnigurumaEngine } from "shiki/engine/oniguruma";
import { unified } from "unified";

const highlighter = await createHighlighter({
  themes: [
    import("@shikijs/themes/github-light"),
    import("@shikijs/themes/github-dark"),
  ],
  langs: [
    import("@shikijs/langs/javascript"),
    import("@shikijs/langs/typescript"),
    import("@shikijs/langs/jsx"),
    import("@shikijs/langs/tsx"),
    import("@shikijs/langs/markdown"),
    import("@shikijs/langs/json"),
    import("@shikijs/langs/css"),
    import("@shikijs/langs/html"),
    import("@shikijs/langs/bash"),
    import("@shikijs/langs/yaml"),
  ],
  engine: createOnigurumaEngine(import("shiki/wasm")),
});

export default async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeShikiFromHighlighter, highlighter, {
      inline: "tailing-curly-colon",
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
    })
    .use(rehypeStringify)
    .process(markdown);
  return result.toString();
}
```

**Styling the themes in CSS:**

The dual-theme setup requires CSS to properly toggle between light and dark modes. Add this to your global CSS file:

```css
/* Shiki Theme */
/* Dark mode */
html.dark .markdown pre.shiki {
  background-color: var(--shiki-dark-bg) !important;
  color: var(--shiki-dark) !important;
}

/* Inside Code Block */
html.dark .markdown pre.shiki span {
  color: var(--shiki-dark) !important;
}

/* Inline */
html.dark .markdown span.shiki {
  background-color: var(--shiki-dark-bg) !important;
}

html.dark .markdown span.shiki code span.line span {
  color: var(--shiki-dark) !important;
}
/* End of Shiki Theme */
```

**Note:** This CSS assumes dark mode is handled with `next-themes{:bash}` and Tailwind CSS. The `html.dark{:css}` selector should match your theme provider’s toggle, and the Markdown content should be wrapped with the `.markdown{:css}` class.

---

## Understanding the Pipeline

**The transformation flow:**

```
Markdown → AST → HTML AST → Highlighted HTML
```

Key components:

- `remarkParse{:bash}` - Converts markdown to syntax tree
- `remarkRehype{:bash}` - Converts markdown AST to HTML AST
- `rehypeShikiFromHighlighter{:bash}` - Adds syntax highlighting
- `rehypeStringify{:bash}` - Converts HTML AST to string

**Why unified() instead of remark():**
The unified processor gives you more control over the transformation pipeline. You're not limited to remark plugins; you can use both remark and rehype plugins together.

---

## Configuration Choices That Matter

**Theme setup for dark mode:**

```typescript
themes: {
  light: "github-light",
  dark: "github-dark",
}
```

This generates CSS custom properties that respond to your site's dark mode implementation. No JavaScript required.

**Inline code highlighting:**

```typescript
inline: "tailing-curly-colon";
```

Enables syntax like `const foo = "bar"{:ts}` for inline code highlighting. The language hint appears after the code block.

**Language imports:**
Only import languages you actually use. Each language adds to bundle size and build time.

---

## Understanding the Trade-offs

### What You Gain

**Performance benefits:**

- Zero runtime JavaScript for highlighting
- No flash of unstyled content
- Smaller client bundles
- Perfect theme consistency
- VS Code-quality accuracy

**Developer experience:**

- Familiar VS Code themes
- Extensive language support
- Dark mode built-in
- Inline code highlighting
- No client-side configuration needed

### What You Give Up

**Build complexity:**

- Longer build times (processes every code block)
- More complex markdown pipeline
- WASM dependency increases bundle size
- Language selection happens at build time

**Runtime limitations:**

- Can't dynamically highlight user-generated code
- Theme switching requires CSS, not JavaScript
- No runtime language detection

### When This Approach Shines

**Perfect for:**

- Technical blogs with lots of code
- Documentation sites
- Static sites prioritizing performance
- Sites with consistent code languages
- Content where theme consistency matters

**Struggles with:**

- Dynamic code highlighting needs
- User-generated code content
- Sites with hundreds of languages
- Real-time code editing features

**The sweet spot:** Static content with known languages where build-time processing is acceptable.

---

## Common Implementation Gotchas

**WASM loading** - The Oniguruma engine requires WebAssembly. Make sure your deployment environment supports it.

**Theme CSS generation** - Shiki generates CSS custom properties. Your dark mode implementation needs to toggle the appropriate classes or attributes.

**Language registration** - Languages must be imported at build time. You can't dynamically add languages based on content.

**Bundle size consideration** - Each theme and language adds to your build. Only import what you need.

---

## The Integration Reality

**Before Shiki:** Fast builds, ugly code blocks  
**After Shiki:** Slower builds, beautiful highlighting

The build time trade-off is worth it for technical content. Your readers get a better experience, and your code examples look professional.

---

## References

- [Previous SSG blog post](/blogs/markdown-based-ssg) - The foundation this builds on
- [My implementation](https://github.com/nabilfikrisp/portfolio) - Working code for this blog
- [Shiki documentation](https://shiki.style/) - Official Shiki docs and examples
