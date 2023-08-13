/*
 * @lc app=leetcode id=55 lang=typescript
 *
 * [55] Jump Game
 */

// @lc code=start
function canJump(nums: number[]): boolean {
  let end = nums.length - 1
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] >= end - i) end = i
  }
  return end === 0
};
// @lc code=end

