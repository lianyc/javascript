class Node {
  constructor(data, left, right) {
    this.data = data
    this.left = left
    this.right = right
    this.parent = null
    this.count = 1
  }

  show() {
    return this.data
  }

  getCount() {
    return this.count
  }
}

module.exports = class BST {
  constructor() {
    this.root = null
    this.sortData = []
  }

  insert(data) {
    let hasData = this.find(data)
    if (hasData) {
      hasData.count++
      return
    }
    let n = new Node(data, null, null)
    if (this.root === null) {
      this.root = n
    } else {
      let current = this.root
      let parent
      while (true) {
        parent = current
        if (data < current.data) {
          current = current.left
          if (current === null) {
            n.parent = parent
            parent.left = n
            break
          }
        } else {
          current = current.right
          if (current === null) {
            n.parent = parent
            parent.right = n
            break
          }
        }
      }
    }
  }

  inOrder(node) {   // 中序遍历
    if (node !== null) {
      this.inOrder(node.left)
      this.sortData.push(node.show())
      this.inOrder(node.right)
    }
  }

  preOrder(node) { //前序遍历
    if (node !== null) {
      console.log(node.show())
      this.preOrder(node.left)
      this.preOrder(node.right)
    }
  }

  postOrder(node) { //后续遍历
    if (node !== null) {
      this.postOrder(node.left)
      this.postOrder(node.right)
      console.log(node.show())
    }
  }

  getMin(node) {
    let current = this.root
    if (node) current = node
    while (current.left !== null) {
      current = current.left
    }
    return current
  }

  getMax(node) {
    let current = this.root
    if (node) current = node
    while (current.right !== null) {
      current = current.right
    }
    return current
  }

  find(data) {
    let current = this.root
    while (current !== null) {
      if (current.data === data) {
        return current
      } else if (data < current.data) {
        current = current.left
      } else {
        current = current.right
      }
    }
    return null
  }

  remove(data) {
    let node = this.find(data)
    if (node === null) {
      return
    }
    if (node.parent === null) { //删除根节点
      if (node.left === null && node.right === null) { //根节点的左节点右节点都为空
        this.root = null
        return
      }
      if (node.left === null) { // 根节点的左子节点为空
        this.root = node.right
        this.root.parent = null
        return
      }
      if (node.right === null) { // 根节点的右子节点为空
        this.root = node.left
        this.root.parent = null
        return
      }
      // 根节点的左右节点都不为空
      let minNode = this.getMin(node.right)
      minNode.left = node.left
      node.left.parent = minNode
      this.root = node.right
      this.root.parent = null
    } else {                     // 删除的不是根节点
      let parent = node.parent
      if (data < parent.data) { // 删除的是父节点的左子节点
        if (node.left === null && node.right === null) { //// 左右子节点都为空
          parent.left = null
          return
        }
        if (node.left === null) { // 左子节点为空
          parent.left = node.right
          parent.left.parent = parent
          return
        }
        if (node.right === null) { // 右子节点为空
          parent.left = node.left
          parent.left.parent = parent
          return
        }
        // 左右节点都不为空
        let minNode = this.getMin(node.right)
        minNode.left = node.left
        node.left.parent = minNode
        parent.left = node.right
        node.right.parent = parent
      } else {  //删除的是父节点的右节点
        if (node.left === null && node.right === null) { // 左右子节点都为空
          parent.right = null
          return
        }
        if (node.left === null) { // 左子节点为空
          parent.right = node.right
          parent.right.parent = parent
          return
        }
        if (node.right === null) { // 右子节点为空
          parent.right = node.left
          parent.right.parent = parent
          return
        }
        // 左右子节点都不为空
        let minNode = this.getMin(node.right)
        minNode.left = node.left
        minNode.left.parent = minNode
        parent.right = node.right
        node.right.parent = parent
      }
    }
  }

  sort() {
    this.sortData = []
    this.inOrder(this.root)
    return this.sortData
  }
}
