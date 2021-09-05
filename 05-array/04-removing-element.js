let numbers = [1, 2, 3, 1, 4]
let another = numbers
//end
const lastNumber = numbers.pop()
console.log('lastNumber :', lastNumber)

// beginning
const firstNumber = numbers.shift()
console.log('firstNumber :', firstNumber)

// middle
numbers.splice(1, 1)
console.log('middle : ', numbers)

// solution 1
// numberss= []

// solution 2
// numbers.length = 0

// solution 3
// numbers.splice(0, numbers.length)

// solution 4
while (numbers.length > 0) {
  numbers.pop
}
console.log(numbers)
