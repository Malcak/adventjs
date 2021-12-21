function wrapGifts(gifts) {
  const packaging = '*'
  const gift = []

  gift.push(`${packaging}${packaging.repeat(gifts[0].length)}${packaging}`)
  
  gifts.forEach((x) => {
    gift.push(`${packaging}${x}${packaging}`)
  })

  gift.push(`${packaging}${packaging.repeat(gifts[0].length)}${packaging}`)

  return gift
}