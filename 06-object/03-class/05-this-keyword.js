// when write class useSticeMode will open auto 
// this is undefine not point global object

class Circle {
  draw() {
    console.log(this)
  }
}

const c = new Circle()
const draw = c.draw
draw()