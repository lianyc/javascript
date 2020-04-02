module.exports = class Deque {
  constructor() {
    this.dataStore = []
  }

  push(element) {
    this.dataStore.push(element)
  }

  shift() {
    return this.dataStore.shift()
  }

  pop() {
    return this.dataStore.pop()
  }

  unshift(element) {
    this.dataStore.unshift(element)
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
    return this.dataStore.length === 0
  }
}
