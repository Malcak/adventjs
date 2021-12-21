function getMinJump(obstacles) {
  const maxLength = Math.max(...obstacles)
  for (let jump = 1; jump <= maxLength; jump++) {
    const flag = testMinJump(obstacles, jump)
    console.log(flag)
    if (flag === true) {
      return jump
    }
  }
}

function testMinJump(obstacles, jump) {
  const maxLength = Math.max(...obstacles)
  for (let i = 0; i <= maxLength; i += jump) {
    if (obstacles.includes(i)) {
      return false
    }
  }
  return true
}