const firstUniqChar = (str) => {
  const freqTable = str.split('').reduce((acc, cur) => {
    acc.set(cur, acc.get(cur) + 1 || 1)
    return acc
  }, new Map())

  for (let i = 0; i < str.length; i++) {
    if (freqTable.get(str[i]) === 1) return i
  }

  return -1
}

console.log(firstUniqChar('loveleetcode')) // 2
