function canReconfigure(from, to) {
  const dic = {}
  for (let i = 0; i < from.length; i++) {
    if ((!dic[from[i]] && !Object.values(dic).includes(to[i])) || dic[from[i]] === to[i])
      dic[from[i]] = to[i]
    else return false
  }
  return true
}