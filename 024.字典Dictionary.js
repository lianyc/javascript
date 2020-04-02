module.exports = class Dictionary {
  constructor() {
    this.dataStore = new Array()
  }

  add(key, value) {
    this.dataStore[key] = value
  }

  find(key) {
    return this.dataStore[key]
  }

  remove(key) {
    delete this.dataStore[key]
  }

  display() {
    for (let key of Object.keys(this.dataStore).sort()) { //对键进行排序
      console.log(key, '->', this.dataStore[key])
    }
  }

  count() {
    return Object.keys(this.dataStore).length
  }

  clear() {
    for (let key of Object.keys(this.dataStore)) {
      delete this.dataStore[key]
    }
  }
}
