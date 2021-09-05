// กระบวนการย้าย function declaration ไปด้านบนไฟล์และสิ้งนี้จะทำโดยอัตโนมัติ


// Function Declaration
walk()
function walk() {
  console.log('walk')
}

// Anonymous Function Expression
run() // --> error connot access 'run' before initialization
let run = function () {
  console.log('run')
}
