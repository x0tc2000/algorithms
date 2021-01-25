// Time complexity: O(n)
// Space complexity: O(n)

const twoSum = (nums, target) => {
  const dict = new Map()

  for (let i = 0; i < nums.length; i++) {
    const dif = target - nums[i]
    if (dict.has(dif)) return [i, dict.get(dif)]
    else dict.set(nums[i], i)
  }
}

// Time complexity: O(nlogn)
// Space complexity: O(1)

// const twoSum = (nums, target) => {
//   nums.sort((a, b) => a - b)
//   let l = 0
//   let r = nums.length - 1

//   while (l < r) {
//     const sum = nums[l] + nums[r]
//     if (sum === target) return [l, r]
//     else if (sum < target) l += 1
//     else r -= 1
//   }
// }

// Time complexity: O(n²)
// Space complexity: O(1)

// const twoSum = (nums, target) => {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) return [i, j]
//     }
//   }
// }

console.log(twoSum([7, 2, 11, 15], 9)) //  [0, 1]
