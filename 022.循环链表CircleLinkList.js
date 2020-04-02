class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

module.exports = class CircleLinkList {
  constructor() {
    this.head = new Node("head")
    this.head.next = this.head
  }

  find(item) {
    let currNode = this.head
    while(currNode.element !== item){
      currNode = currNode.next
    }
    return currNode
  }

  insert(newElement, item) {
    let newNode = new Node(newElement)
    let current = this.find(item)
    newNode.next = current.next
    current.next = newNode
  }

  findPrev(item) {
    let current = this.head
    while (current.next !== null && current.next.element !== item) {
      current = current.next
    }
    return current
  }

  remove(item) {
    let prevNode = this.findPrev(item)
    if (prevNode.next !== null) {
      prevNode.next = prevNode.next.next
    }
  }

  display() {
    let current = this.head
    while(current.next !== null && current.next.element !== 'head') {
      console.log(current.next.element)
      current = current.next
    }
  }
}
