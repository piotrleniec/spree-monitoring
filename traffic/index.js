const Nightmare = require('nightmare')

const nightmare = Nightmare()
const crawl = url => {
  console.log(url)

  nightmare
    .goto(url)
    .evaluate(() => {
      const links = Array.from(document.querySelectorAll('a'))
      const urls = Array.from(new Set(links.map(link => link.href)))

      return urls[Math.floor(Math.random() * urls.length)]
    })
    .then(url => Promise.resolve(url || 'http://localhost:3000'))
    .then(crawl)
}

crawl('http://localhost:3000')
