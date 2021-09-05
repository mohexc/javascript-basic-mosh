const print = console.log

const obj = {
  prop_1: 1,
  prop_2: 2
}

//? add member
obj.prop_3 = 'prop_3'
print(obj)

//? update value
obj.prop_1 = 'update value'
print('object.prop_2 : ', obj.prop_1)
