let List = require("./004.列表List")

let list = new List()
list.append('a')
list.append('b')
list.append('c')
list.append('d')

for (list.front(); list.hasNext(); list.next()) {
  console.log(list.getElement())
}

for (list.end(); list.hasPrev(); list.prev()) {
  console.log(list.getElement())
}
