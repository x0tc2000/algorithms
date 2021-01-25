// Time complexity: O(n)
// Space complexity: O(n)

const containsDuplicate = (nums) => new Set(nums).size !== nums.length

console.log(containsDuplicate([1, 2, 3, 1])) //  true
