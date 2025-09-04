import { Separator } from "./ui/separator";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t-my-accent-green border-t py-3">
      <div className="my-max-width flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex flex-col">
          <h3 className="text-my-accent-green font-heading text-center text-lg font-semibold lg:text-start">
            nabilfikrisp
          </h3>
          <p className="text-muted-foreground text-sm">Full Stack Developer</p>
        </div>
      </div>

      <div className="text-muted-foreground my-max-width mb-4 px-5 text-center text-sm">
        <Separator className="bg-muted-foreground my-4" />
        <p>© {currentYear} nabilfikrisp. All rights reserved.</p>
        <p>Developed & Built with ❤️</p>
      </div>
    </footer>
  );
}
