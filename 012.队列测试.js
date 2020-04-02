let Queue = require('./011.队列Queue')

let queue = new Queue()
queue.enqueue('a')
queue.enqueue('b')
queue.enqueue('c')
queue.enqueue('d')
queue.enqueue('e')
queue.dequeue()
console.log(queue.toString())
console.log(queue.front())
console.log(queue.end())
console.log(queue.empty())

