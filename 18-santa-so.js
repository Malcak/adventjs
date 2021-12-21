function fixFiles(files) {
  const occurrences = {}
  return files.map(file => {
    if (file in occurrences) occurrences[file]++
    else occurrences[file] = 0
    return !occurrences[file] ? file : `${file}(${occurrences[file]})`
  })
}