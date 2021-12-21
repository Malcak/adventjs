function isValid(letter) {
  let flag = true
  const grinchMistakes = ['{', '}', '[', ']']
  const gifts = letter.split(' ')
  
  gifts.forEach((gift) => {
    if (gift.startsWith('(')) {
      if (!gift.endsWith(')')) {
        flag = false
      } else if (grinchMistakes.some((mistake) => gift.includes(mistake))) {
        flag = false
      } else if (gift.split('()').some((y) => y === '(' || y === ')' || y === '')) {
          flag = false
      }
    }
  })
  
  return flag
}