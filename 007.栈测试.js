let Stack = require('./006.栈Stack')

let stack = new Stack()
stack.push('a')
stack.push('b')
stack.push('c')
stack.push('d')
stack.push('e')

console.log(stack.length())
console.log(stack.pop())
console.log(stack.peek())
stack.clear()
console.log(stack.length())

