module.exports = function () {
  Set.prototype.union = function (set) { // 合集
    let newSet = new Set()
    for (let item of this) {
      newSet.add(item)
    }
    for (let item of set) {
      newSet.add(item)
    }
    return newSet
  }

  Set.prototype.intersect = function (set) { // 交集
    let newSet = new Set()
    for (let item of set) {
      if (this.has(item)) {
        newSet.add(item)
      }
    }
    return newSet
  }

  Set.prototype.subset = function (set) { //子集
    let isSet = true
    if (set.size > this.size) {
      isSet = false
    } else {
      for (let item of set) {
        if (!this.has(item)) {
          isSet = false
        }
      }
    }
    return isSet
  }

  Set.prototype.difference = function (set) { //补集（本元素有但是第二个元素没有）
    let newSet = new Set()
    for (let item of this) {
      if (!set.has(item)) {
        newSet.add(item)
      }
    }
    return newSet
  }
}()


