/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://nabilfikrisp.pages.dev",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: "monthly",
  priority: 0.8,
  additionalPaths: async () => [
    // Optional: If you have extra static paths, add them; not needed for your 3 pages
  ],
  transform: async (config, path) => {
    // Optional: Boost priority for blogs if it's your key page for "nablif krisp"
    if (path === "/blogs") {
      return { loc: path, priority: 1.0, changefreq: "weekly" };
    }
    return { loc: path, priority: 0.7 };
  },
};
