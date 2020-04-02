require('./030.集合Set')

let set1 = new Set(['a', 'b', 'c'])
let set2 = new Set(['a', 'b', 'd', 'e'])

console.log(set1.union(set2))
console.log(set1.intersect(set2))
console.log(set1.subset(set2))
console.log(set1.difference(set2))
console.log(set2.difference(set1))
