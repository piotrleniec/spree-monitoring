const nightmare = require('../nightmare')

const roam = ({ url = 'http://localhost:3000', pageCount } = {}) => {
  const promise = nightmare
    .goto(url)
    .evaluate(() => {
      const links = Array.from(document.querySelectorAll('a'))
      const urls = Array.from(new Set(links.map(link => link.href)))

      return urls[Math.floor(Math.random() * urls.length)]
    })
    .then(url => Promise.resolve({ url: url || 'http://localhost:3000', pageCount: pageCount - 1}))

  return pageCount > 1 ? promise.then(roam) : promise
}

module.exports = () => roam({ pageCount: 1 + Math.floor(10 * Math.random()) })
