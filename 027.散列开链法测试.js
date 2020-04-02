let HashTale = require('./026.散列HashTable(开链法)')
let hashTable = new HashTale()
const names = ['David', 'Jennifer', 'Donnie', 'Raymond', 'Cynthia', 'Mike', 'Clayton', 'Danny', 'Jonathan']
for (let i = 0; i < names.length; i++) {
  hashTable.put(names[i], names[i])
}
hashTable.display()
console.log(hashTable.get('Raymond'))
