/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://web-study.blog',
  exclude: ['/design*', '/engineer*', '/column*', '/tag*'],
  generateRobotsTxt: true,
  sitemapSize: 7000,
};

module.exports = config;
