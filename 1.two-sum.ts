/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  const numMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const difference = target - num;

    if (numMap.has(difference)) return [numMap.get(difference), i]
    numMap.set(num, i);
  }
  return []
};
// @lc code=end

