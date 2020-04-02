let BST = require('./034.二叉查找树计数BST')

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
bst.insert(36)
bst.insert(9)
bst.insert(59)
bst.insert(23)
bst.insert(46)
bst.insert(8)
bst.insert(34)
bst.insert(58)
bst.insert(34)
bst.insert(58)

let sortData = bst.sort()
console.log(sortData) // 排序
for (let i = 0; i < sortData.length; i++) {
  let node = bst.find(sortData[i])
  console.log(sortData[i] + ' 出现次数：' + node.count)
}






