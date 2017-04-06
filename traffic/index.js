const Nightmare = require('nightmare')

const nightmare = Nightmare()

const roam = ({ url = 'http://localhost:3000', pageCount = 1 } = {}) => {
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

const addProductToCart = () =>
  nightmare
    .goto('http://localhost:3000')
    .evaluate(() => {
      const products = Array.from(document.querySelectorAll('.product-list-item'))
      const product = products[Math.floor(Math.random() * products.length)]

      return product.querySelector('a').href
    })
    .then(url => {
      return nightmare
        .goto(url)
        .type('#quantity', 1 + Math.floor(5 * Math.random()))
        .click('#add-to-cart-button')
        .wait()
        .then(() => Promise.resolve())
    })

addProductToCart()
  .then(addProductToCart)
  .then(() => {
    console.log('finished')

    nightmare.end().then()
  })
  .catch(error => { console.log(error) })

/*
roam({ pageCount: 2 })
  .then(() => {
    console.log('finished')

    nightmare.end().then()
  })
*/
