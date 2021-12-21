function createXmasTree(height) {
  const spaces = '_'
  const leaf = '*'
  const wood = '#'
  let tree = ''
  for (let i = 0; i < height ; i++) {
    let line = ''
    line += spaces.repeat(height - i - 1)
    line += leaf.repeat(i * 2 + 1)
    line += spaces.repeat(height - i - 1)
    tree += line + '\n'
  }
  const air = spaces.repeat(height - 1)
  tree += air + wood + air + '\n'
  tree += air + wood + air + ''
  return tree
}