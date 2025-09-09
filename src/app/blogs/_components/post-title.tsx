export function PostTitle({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="mb-12 text-center text-4xl leading-tight font-bold tracking-tighter md:text-left md:text-6xl md:leading-none">
      {children}
    </h1>
  );
}
