function decodeNumbers(symbols) {
  const dic = {
    '.': 1,
    ',': 5,
    ':': 10,
    ';': 50,
    '!': 100,
  }
  const exp = symbols.split('').map((x) => dic[x])
  if (exp.some((x) => x === undefined)) {
    return NaN
  }
  
  let totalValue = 0
  exp.forEach((x, i) => {
    if (i !== symbols.length - 1) {
      totalValue += (exp[i + 1] > x) ? -x : x
    } else {
      totalValue += x
    }
  })
  return totalValue
}