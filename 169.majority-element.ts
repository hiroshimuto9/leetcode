/*
 * @lc app=leetcode id=169 lang=typescript
 *
 * [169] Majority Element
 */

// @lc code=start
function majorityElement(nums: number[]): number {
  let count: number = 0;
  let candidate;
  for (const num of nums) {
    if (count === 0) {
      candidate = num;
      count = 1;
    } else if (candidate === num) {
      count++
    } else {
      count--
    }
  }
  return candidate
};
// @lc code=end

