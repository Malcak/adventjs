function checkSledJump(heights) {
  const maxHeight = Math.max(...heights)
  const indexOfMaxHeight = heights.indexOf(maxHeight)

  if (indexOfMaxHeight === 0 || indexOfMaxHeight === heights.length - 1) return false

  const upwardSlice = heights.slice(0, indexOfMaxHeight + 1)
  const isAscending = upwardSlice.every((x, i) => i === 0 || x > upwardSlice[i - 1])

  const downwardSlice = heights.slice(indexOfMaxHeight, heights.length)
  const isDescending = downwardSlice.every((x, i) => i === downwardSlice.length-1 || x > downwardSlice[i + 1])

  return isAscending && isDescending
}