type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  return (
    <div
      className="markdown"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
