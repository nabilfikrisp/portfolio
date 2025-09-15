import { Post } from "@/lib/type";

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
