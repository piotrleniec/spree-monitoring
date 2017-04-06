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
      if (!products) return

      const product = products[Math.floor(Math.random() * products.length)]
      if(! product) return

      return product.querySelector('a').href
    })
    .then(url => {
      if (!url) return Promise.resolve()

      return nightmare
        .goto(url)
        .wait('#quantity')
        .click('#add-to-cart-button')
        .wait(500)
        .then(() => Promise.resolve())
    })
addProductToCart()
  .then(addProductToCart)
  .then(() => {
    console.log('finished')

    nightmare.end().then()
  })
  .catch(error => {
    console.log(error)

    nightmare.end().then()
  })

/*
roam({ pageCount: 2 })
  .then(() => {
    console.log('finished')

    nightmare.end().then()
  })
*/
