// Global variable
const color = 'red'

function start() {
  const message = 'hi'
  //Local variable hight priority more than
  const color = 'blue'
  console.log(color)
}


function stop() {
  const message = 'bye'
  console.log(color)
}

start()
stop()