// var -> function-scoped
// es6 (es2015) : let, const -> block-scopeed

function start() {
  for (var i = 0; i < 5; i++) {
    console.log('inside for', i)
  }
  console.log('------')
  console.log('outside for', i)
}

start()