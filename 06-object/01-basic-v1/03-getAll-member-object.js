const obj = {
  prop_1: 1,
  prop_2: 2
}

//? 01
for (let key in obj) {
  console.log(`key : ${key},`, `value : ${obj[key]}`)
}

//? 02
for (let key of Object.keys(obj)) {
  console.log(key)
}

if ('color' in obj) console.log('yes')
else console.log('no')




