function missingReindeer(ids) {
  return ids.length * (ids.length + 1) / 2 - ids.reduce((a,b) => a + b)
}