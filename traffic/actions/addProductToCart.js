const nightmare = require('../nightmare')

module.exports = () =>
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
