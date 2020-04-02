function fac(number) {
  if (number === 1) {
    return number
  } else {
    return number * fac(number - 1)
  }
}

console.log(fac(5))
