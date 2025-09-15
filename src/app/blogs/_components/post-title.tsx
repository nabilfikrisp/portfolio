export function PostTitle({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="mb-6 text-center text-3xl leading-tight font-bold tracking-tighter md:mb-12 md:text-left md:text-6xl md:leading-none">
      {children}
    </h1>
  );
}
