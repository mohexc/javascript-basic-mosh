const numbers = [1, -1, 2, 3]

const allPositive = numbers.every((number) => number >= 0)
console.log('allPositive = ', allPositive)

const soumOnePositive = numbers.some((number) => number >= 0)
console.log('soumOnePositive ', soumOnePositive)