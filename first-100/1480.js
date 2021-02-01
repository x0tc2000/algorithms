// Time complexity: O(n)
// Space complexity: O(1)

const runningSum = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    nums[i] += nums[i - 1]
  }

  return nums
}

console.log(runningSum([1, 2, 3, 4])) //  [1, 3, 6, 10]
