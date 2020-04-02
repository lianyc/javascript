module.exports = class Queue {
  constructor() {
    this.dataStore = []
  }

  enqueue(element) {
    this.dataStore.push(element)
  }

  dequeue() {
    return this.dataStore.shift()
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
