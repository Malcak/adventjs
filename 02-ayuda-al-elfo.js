function listGifts(letter) {
  const gifts = {}
  letter.split(' ')
    .filter(x => x !== '')
    .filter(x => !x.startsWith('_'))
    .map((x) => {
      gifts[x] = (gifts[x] || 0) + 1
  })
  return gifts
}