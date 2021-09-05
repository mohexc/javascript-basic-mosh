class Shap {
  move() {
    console.log('move')
  }
}

class Circle extends Shap {
  move() {
    super.move()
    console.log('circle move')
  }
}

const c = new Circle()
c.move()