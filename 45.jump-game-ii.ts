/*
 * @lc app=leetcode id=45 lang=typescript
 *
 * [45] Jump Game II
 */

// @lc code=start
function jump(nums: number[]): number {
  let jump = 0
  let current = 0;
  let max = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    max = Math.max(max, i + nums[i])
    if (i === current) {
      jump++
      current = max
    }
  }
  return jump
};
// @lc code=end

