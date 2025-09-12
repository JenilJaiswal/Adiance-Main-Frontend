const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const path = require('path');
const fs = require('fs');

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  // Add more URLs here
];

const sitemap = new SitemapStream({ hostname: 'https://www.adiance.com/' });
const writeStream = createWriteStream(path.join(__dirname, 'public', 'sitemap.xml'));

streamToPromise(sitemap.pipe(writeStream)).then(() => {
  console.log('Sitemap created successfully!');
}).catch(console.error);

links.forEach(link => sitemap.write(link));
sitemap.end();
