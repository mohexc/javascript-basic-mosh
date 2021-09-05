const numbers = [1, 2, 3]

const listHtmlTag = numbers.map(n => `<li>${n}</li>`)

console.log(listHtmlTag)

const objects = numbers.map(number => ({ value: number }))
console.log(objects)