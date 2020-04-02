function matrixArray(rows, cols, init) {
  let arr = []
  for (let i = 0; i< rows; i++) {
    let columns = []
    for (let j = 0; j < cols; j++) {
      columns[j] = init
    }
    arr[i] = columns
  }
  return arr
}

console.log(Array.matrix(10,10, 0))
