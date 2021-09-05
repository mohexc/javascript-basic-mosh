
const person = {
  firstName: 'Mosh',
  lastName: 'Hamedani',
  get fullName() {
    return `${person.firstName} ${person.lastName}`
  },
  set fullName(value) {
    if (typeof value !== 'string') {
      throw new Error('value not string')
    }
    const parts = value.split(' ')
    if (parts.length !== 2) {
      throw new Error('Enter a first and last name.')
    }
    this.firstName = parts[0]
    this.lastName = parts[1]
  }
}

try {
  person.fullName = null
} catch (error) {
  console.error(error.message)
}
console.log(person.fullName)