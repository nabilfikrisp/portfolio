export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-width-app flex w-full flex-1 flex-col gap-4 py-8">
      <div className="flex flex-1 flex-col">{children}</div>
      {/* <aside className="w-40 bg-amber-300">this gonna be TOC</aside> */}
    </div>
  );
}
