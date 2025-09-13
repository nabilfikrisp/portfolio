import rehypeShiki from "@shikijs/rehype";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

export default async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeShiki, {
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
