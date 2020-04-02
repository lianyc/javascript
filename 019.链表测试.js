let LinkList = require('./018.链表LinkList')

let linkList = new LinkList()
linkList.insert('廉永成', 'head')
linkList.insert('李志帅', '廉永成')
linkList.insert('白树杰', 'head')
linkList.remove('白树杰')
linkList.display()
