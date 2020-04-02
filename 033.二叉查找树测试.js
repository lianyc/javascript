let BST = require('./032.二叉查找树BST')

let bst = new BST()
bst.insert(33)
bst.insert(6)
bst.insert(55)
bst.insert(36)
bst.insert(9)
bst.insert(59)
bst.insert(23)
bst.insert(46)
bst.insert(8)
bst.insert(34)
bst.insert(58)

// console.log('--------中序---------')
// bst.inOrder(bst.root)
// console.log('--------前序---------')
// bst.preOrder(bst.root)
// console.log('--------后序---------')
// bst.postOrder(bst.root)
// console.log('mix', bst.getMin())
// console.log('max', bst.getMax())
// console.log('find',bst.find(9))
console.log(bst.getNodeCount())
bst.remove(55)
console.log(bst.getSideCount())
// console.log(bst.sort()) // 排序






