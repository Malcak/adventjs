function groupBy(collection, it) {
  const result = {}
  collection.forEach((x) => {
    const item = typeof it === 'function' ? it(x) : x[it]   
    const bucket = result[item]
    if (!Array.isArray(bucket)) {
      result[item] = [x]
    } else {
      result[item].push(x)
    }
  })
  return result
}