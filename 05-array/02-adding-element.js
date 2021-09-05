const print = console.log
const numbers = [3, 4]

//? End
numbers.push(5, 6)
print(numbers)

//? Beginning
numbers.unshift(1, 2)
print(numbers)

//? Middle
numbers.splice(2, 0, 'a', 'b')
print(numbers)
numbers.splice(2, 2, 'a', 'b')
print(numbers)
