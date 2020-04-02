module.exports = class HashTable {
  constructor() {
    this.table = new Array(137)
    this.values = []
  }

  betterHash(string) { // 霍纳算法
    const H = 37
    let total = 0
    for (let i = 0; i < string.length; i++) {
      total += H * total + string.charCodeAt(i)
    }
    total = total % this.table.length
    if (total < 0) {
      total += this.table.length - 1
    }
    return parseInt(total)
  }

  put(key, data) {
    let pos = this.betterHash(key)
    if(this.table[pos] === undefined) {
      this.table[pos] = key
      this.values[pos] = data
    } else {
      while (this.table[pos] !== undefined) {
        pos++
      }
      this.table[pos] = key
      this.values[pos] = data
    }
  }

  get(key) {
    let pos = this.betterHash(key)
    if (pos > -1) {
      for (let i = pos; i < this.table.length ; i++) {
        if (this.table[i] === key) {
          return this.values[i]
        }
      }
    }
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i] !== undefined) {
        console.log(i + ':' + this.values[i])
      }
    }
  }

}
