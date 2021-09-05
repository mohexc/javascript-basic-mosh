//? finding elements array

const numbers = [1, 2, 3, 1, 4]
console.log('indexOf: ', numbers.indexOf('a'))
console.log('indexOf: ', numbers.indexOf(1))
console.log('lastIndexOf: ', numbers.lastIndexOf(1))

//? finding elements object
const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
  { id: 3, name: "c" },
]

const courseA = courses.find(course => course.name === "a")
console.log(courseA)