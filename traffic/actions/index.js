const roam = require('./roam')
const addProductToCart = require('./addProductToCart')

const actions = [
  { name: 'roam', function: roam },
  { name: 'addProductToCart', function: addProductToCart }
]

module.exports = () => actions[Math.floor(actions.length * Math.random())]
