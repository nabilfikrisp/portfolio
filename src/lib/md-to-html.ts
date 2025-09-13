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
    import("@shikijs/themes/tokyo-night"),
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
        dark: "tokyo-night",
      },
    })
    .use(rehypeStringify)
    .process(markdown);
  return result.toString();
}
