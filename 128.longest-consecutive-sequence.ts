/*
 * @lc app=leetcode id=128 lang=typescript
 *
 * [128] Longest Consecutive Sequence
 */

// @lc code=start
function longestConsecutive(nums: number[]): number {
  nums.sort((a, b) => a - b)
  if (nums.length < 2) return nums.length
  let max = 0
  let current = nums[0]
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i]
    if (num === current) continue
    if (num === current + 1) {
      count++
    } else {
      max = count > max ? count : max
      count = 1
    }
    current = num
  }
  return count > max ? count : max

};
// @lc code=end

