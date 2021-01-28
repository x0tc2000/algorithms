// Time complexity: O(n)
// Space complexity: O(n)

const majorityElement = (nums) => {
  const freqTbl = nums.reduce((acc, cur) => {
    acc.set(cur, acc.get(cur) + 1 || 1)
    return acc
  }, new Map())

  const halfLen = Math.floor(nums.length / 2)

  for (const [key, freq] of freqTbl) {
    if (freq > halfLen) return key
  }
}

console.log(majorityElement([3, 2, 3])) //  3
