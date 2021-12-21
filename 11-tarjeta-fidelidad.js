function shouldBuyFidelity(times) {
  const normalPrice = 12 * times
  const fidelityPrice = 250 + 12 * ((1 - (0.75 ** (times + 1))) / (1 - 0.75)) - 12
  return fidelityPrice < normalPrice
}