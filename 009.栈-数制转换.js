let Stack = require('./006.栈Stack')

function mulBase(num, base) {
  let s = new Stack()
  do {
    s.push(num % base)
    num = Math.floor(num /= base)
  } while (num > 0)
  let convert = ''
  while (s.length() > 0) {
    convert += s.pop()
  }
  return convert
}

console.log(mulBase(15, 2))

