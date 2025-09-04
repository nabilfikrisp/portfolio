import { Button } from "../ui/button";

export function MainSection() {
  return (
    <section className="space-y-4">
      <div className="flex w-full flex-1 flex-col gap-2">
        <h1 className="text-my-headline text-5xl font-semibold tracking-tight">
          Muhammad Nabil Fikri Sudjarpadi Putra
        </h1>
        <h2 className="text-2xl text-balance">Full Stack Developer</h2>
        <div className="flex items-center text-lg">
          <div className="bg-my-accent-one mr-2 rounded-sm p-1">
            <img
              className="h-4 w-6 rounded-sm"
              src="/icons/flag.webp"
              alt="indonesian-flag"
            />
          </div>
          <p>Bandung, West Java, Indonesia</p>
        </div>
      </div>
      <Button>Click me</Button>
    </section>
  );
}
