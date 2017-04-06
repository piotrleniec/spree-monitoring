const nightmare = require('./nightmare')
const getRandomAction = require('./actions')

const runRandomAction = () => {
  const action = getRandomAction()

  console.log('running', action.name)

  action.function()
    .then(runRandomAction)
}

runRandomAction()
