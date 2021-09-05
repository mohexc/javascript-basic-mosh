const first = [1, 2, 3]
const second = [4, 5, 6]
// way_1
const combined = first.concat(second)
console.log(combined)
// way_2
const slice = combined.slice()
console.log(slice)

// way_3 spe
const combined_3 = [...first, ...second]
console.log(combined_3)