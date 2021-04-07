const fs = require('fs')
const path = require('path')

const file = path.join(__dirname, 'public/sitemap.xml')

const URL = 'https://buscadorempleo.org'
const PAGES = [
  {
    prior: '0.90',
    pages: ['/ultimos']
  },
  {
    prior: '0.50',
    pages: ['/aviso-legal', '/politica-de-privacidad', '/uso-de-cookies']
  }
]

createSitemap()

async function createSitemap() {

  const date = new Date().toISOString()

  const head = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
    http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  <url>
    <loc>${URL}/</loc>
    <lastmod>${date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.00</priority>
  </url>`

  fs.writeFileSync(file, head, err => {
    err && console.error(err)
  })

  PAGES.forEach(pages => {
    pages.pages.forEach(page => {
      const xml = `
  <url>
    <loc>${URL}${page}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${pages.prior}</priority>
  </url>`

      fs.appendFileSync(file, xml, err => {
        err && console.error(err)
      })
    })
  })

  const foot = "\n</urlset>"
  fs.appendFileSync(file, foot, err => {
    err && console.error(err)
  })
}

