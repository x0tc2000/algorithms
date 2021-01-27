// Time complexity: O(n)
// Space complexity: O(n)

const findTheDifference = (s, t) => {
  const freqTable = [...t].reduce((acc, cur) => {
    acc.set(cur, acc.get(cur) + 1 || 1)
    return acc
  }, new Map())

  for (const letter of s) {
    if (freqTable.has(letter)) freqTable.set(letter, freqTable.get(letter) - 1)
  }

  for (const [key, val] of freqTable) {
    if (val === 1) return key
  }
}

console.log(findTheDifference('abcd', 'abcde')) //  "e"
