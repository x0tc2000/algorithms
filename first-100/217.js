// Time complexity: O(n)
// Space complexity: O(n)

const containsDuplicate = (nums) => new Set(nums).size !== nums.length

// Time complexity: O(n)
// Space complexity: O(n)

// const containsDuplicate = (nums) => {
//   const dict = new Map()

//   for (const num of nums) {
//     if (dict.has(num)) return false
//     dict.set(num, 1)
//   }

//   return false
// }

console.log(containsDuplicate([1, 2, 3, 1])) //  true
