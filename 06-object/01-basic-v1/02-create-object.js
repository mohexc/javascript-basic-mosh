const print = console.log

//? 01.LITERAL OBJECT
const literalObject = {
  prop_1: 1,
  mothod_1: function method_1() {
    return 'method'
  }
}
print(literalObject.prop_1)
print(literalObject.mothod_1())

//? 02.FACTORY FUNTION
function factoryObject(param) {
  return {
    prop_1: param,
    method_1: function method_1() {
      return 'method factoryObject'
    }
  }
}
const instance_1 = factoryObject(1)
print(instance_1.prop_1)
print(instance_1.method_1())

//? 03.CONSTUCTER FUNCTION
function ConstructorObject(param) {
  this.prop_1 = param
  this.method_1 = function method_1() {
    return 'method ConstructorObject'
  }
}
const instance_2 = new ConstructorObject('constuctrue')
print(instance_2.prop_1)
print(instance_2.method_1())

//? 04.PROTOTYPE

//? 05.CLASS 

//? 06.Oject.assign
const another = Object.assign({ prop_2: 2 }, literalObject)
console.log(another)

// ? 07.DESTRUCTURING