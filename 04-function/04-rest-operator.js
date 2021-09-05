function sum(...args) {
  console.log(args)
  return args.reduce((a, b) => a + b)
}
console.log(sum(1, 2, 3, 4, 5))

//----
function totalPrice(discount, ...prices) {
  const total = prices.reduce((a, b) => a + b)
  console.log(total, discount)
  return total * (1 - discount)
}
console.log(`totalPrice: ${totalPrice(0.1, 1, 2, 3, 4, 5)}`)