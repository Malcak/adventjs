function contains(store, product) {
  let finded = false
  Object.values(store).forEach((x) => {
    if (typeof x === 'object') {
      finded = contains(x, product)
    } else if (x === product) {
      finded = true
    }
  })
  return finded
}