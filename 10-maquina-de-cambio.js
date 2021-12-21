function getCoins(change) {
  const coins = [50, 20, 10, 5, 2, 1]
  const changeInCoins = new Array(6).fill(0)
  let value = change
  coins.forEach((x, index) => {
    const quotient = Math.floor(value / x)
    if (!quotient < 1) {
      changeInCoins[index] = quotient
      value = value - (quotient * x)
    }
  })
  return changeInCoins.reverse()
}