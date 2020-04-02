let Stack = require('./006.栈Stack')

function factorial(n) {
  let s = new Stack()
  while(n > 1) {
    s.push(n--)
  }
  let product = 1
  while(s.length()) {
    product *= s.pop()
  }
  return product
}

console.log(factorial(5))


