module.exports = class HashTable {
  /*******
   * 开链法：数组的大小是待存储数据个数的1.5倍
   * 线性探测法：数组的大小是待存储数据的2倍或2倍以上
   * *********/
  constructor() {
    this.table = new Array(137)
    this.buildChains() //开链法处理碰撞
  }

  buildChains() {
    for (let i = 0; i < this.table.length; i++) {
      this.table[i] = new Array()
    }
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
    let item = {}
    item[key] = data
    this.table[pos].push(item)
  }

  get(key) {
    let pos = this.betterHash(key)
    for (let i = 0; i < this.table[pos].length; i++) {
      if (Object.keys(this.table[pos][i])[0] === key) {
        return this.table[pos][i][key]
      }
    }
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i].length) {
        let str = i + ':['
        for (let j = 0; j < this.table[i].length; j++) {
          str += ' {' + Object.keys(this.table[i][j])[0] + ' : ' + this.table[i][j][Object.keys(this.table[i][j])[0]] + ' } '
        }
        str += ']'
        console.log(str)
      }
    }
  }

}
