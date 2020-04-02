class Node {
  constructor(element) {
    this.element = element
    this.next = null
    this.previous = null
  }
}

module.exports = class LinkList {
  constructor() {
    this.head = new Node("head")
  }

  find(item) {
    let currNode = this.head
    while (currNode.element !== item) {
      currNode = currNode.next
    }
    return currNode
  }

  findNext(item) {
    return this.find(item).next
  }

  insert(newElement, item) {
    let newNode = new Node(newElement)
    let current = this.find(item)
    let next = this.findNext(item)
    if (next !== null) next.previous = newNode
    newNode.next = current.next
    newNode.previous = current
    current.next = newNode
  }

  remove(item) {
    let current = this.find(item)
    if (current.next !== null) {
      current.previous.next = current.next
      current.next.previous = current.previous
      current.next = null
      current.previous = null
    }
  }

  display() {
    let current = this.head
    while (current.next !== null) {
      console.log(current.next.element)
      current = current.next
    }
  }

  findLast() {
    let current = this.head
    while (current.next !== null) {
      current = current.next
    }
    return current
  }

  displayReverse() {
    let current = this.findLast()
    while (current.previous !== null) {
      console.log(current.element)
      current = current.previous
    }
  }
}
