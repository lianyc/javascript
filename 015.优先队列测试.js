let PriorityQueue = require('./014.优先队列PriorityQueue')

class People {
  constructor(name, weight) {
    this.name = name
    this.weight = weight
  }
}

let queue = new PriorityQueue()
queue.enqueue(new People('廉永成', 9))
queue.enqueue(new People('李志帅', 6))
queue.enqueue(new People('海洋', 9))
queue.enqueue(new People('陆婷婷', 9))
queue.enqueue(new People('冯瑶', 10))
console.log(queue)
queue.dequeue()
console.log(queue)
queue.dequeue()
console.log(queue)
queue.dequeue()
console.log(queue)
