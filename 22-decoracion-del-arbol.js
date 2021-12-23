function countDecorations({value, left, right}) {
  value += !left ? 0 : countDecorations(left)
  value += !right ? 0 : countDecorations(right)
  return value
}