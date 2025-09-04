export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t-my-accent-green border-t py-3">
      <div className="my-max-width flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex flex-col">
          <h3 className="text-my-accent-one text-center text-lg font-semibold lg:text-start">
            nabilfikrisp
          </h3>
          <p className="text-muted-foreground text-sm dark:text-gray-400">
            Full Stack Developer
          </p>
        </div>
      </div>

      <div className="text-muted-foreground border-muted-foreground my-max-width mt-6 border-t pt-6 text-center text-sm">
        <p>© {currentYear} nabilfikrisp. All rights reserved.</p>
        <p className="mt-2">Developed & Built with ❤️</p>
      </div>
    </footer>
  );
}
