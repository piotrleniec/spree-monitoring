const nightmare = require('./nightmare')
const roam = require('./actions/roam')
const addProductToCart = require('./actions/addProductToCart')

roam()
  .then(addProductToCart)
  .then(() => {
    console.log('finished')

    nightmare.end().then()
  })
  .catch(error => {
    console.log(error)

    nightmare.end().then()
  })
