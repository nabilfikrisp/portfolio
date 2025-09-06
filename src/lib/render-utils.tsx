/**
 * Helper to render a string with **bold** markdown as JSX with <strong>.
 */
type RenderStringWithBoldOptions = {
  className?: string;
};

export function renderStringWithBold(
  text: string,
  options?: RenderStringWithBoldOptions,
) {
  // Split by **...**
  const parts = text.split(/(\*\*[^\*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong
          key={i}
          className={options?.className}
        >
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}
