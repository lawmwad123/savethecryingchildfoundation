/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://savethecryingchildrenfoundation.vercel.app',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  exclude: ['/server-sitemap.xml'], // Exclude any pages you don't want in the sitemap
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://savethecryingchildrenfoundation.vercel.app/server-sitemap.xml', // Replace with your domain
    ],
  },
  changefreq: 'weekly',
  priority: 0.7,
} 