let LinkList = require('./022.循环链表CircleLinkList')

let linkList = new LinkList()
linkList.insert('廉永成', 'head')
linkList.insert('李志帅', '廉永成')
linkList.insert('白树杰', 'head')
linkList.display()
