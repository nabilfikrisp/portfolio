import { Post } from "@/lib/types";

type Props = {
  content: Post["content"];
};

export function PostBody({ content }: Props) {
  return (
    <div
      className="markdown"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
