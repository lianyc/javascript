module.exports = class PriorityQueue {
  constructor() {
    this.dataStore = []
  }

  enqueue(element) {
    this.dataStore.push(element)
  }

  dequeue() {
    let entry = 0
    // weight为权重，权重越大，优先出队列
    for (let i = 0; i < this.dataStore.length; i++) {
      if (this.dataStore[i].weight > this.dataStore[entry].weight) {
        entry = i
      }
    }
    return this.dataStore.splice(entry, 1)
  }

  front() {
    return this.dataStore[0]
  }

  end() {
    return this.dataStore[this.dataStore.length - 1]
  }

  toString() {
    let str = ''
    for (let i = 0; i < this.dataStore.length; i++) {
      str += this.dataStore[i] + '\n'
    }
    return str
  }

  empty() {
    return this.dataStore.length === 0;
  }
}
