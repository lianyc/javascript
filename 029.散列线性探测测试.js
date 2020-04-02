let HashTale = require('./028.散列HashTable(线性探测)')
let hashTable = new HashTale()
const names = ['David', 'Jennifer', 'Donnie', 'Raymond', 'Cynthia', 'Mike', 'Clayton', 'Danny', 'Jonathan']
for (let i = 0; i < names.length; i++) {
  hashTable.put(names[i], names[i])
}
hashTable.display()
console.log(hashTable.get('Mike'))
