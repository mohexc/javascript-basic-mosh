const print = console.log

const now = new Date()
const date1 = new Date('May 11 2018 09:00')
print(now)
print(date1)
now.setFullYear(2017)
print(now)
print(now.toDateString())
print(now.toTimeString())
print(now.toISOString())