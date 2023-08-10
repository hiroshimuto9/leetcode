/*
 * @lc app=leetcode id=80 lang=typescript
 *
 * [80] Remove Duplicates from Sorted Array II
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
  if (!nums.length) return 0;
  const numsLength = nums.length;
  let gap = 0;
  for (let i = 0; i < numsLength; i++) {
    if (nums[i] === nums[i + 2]) {
      gap++;
    } else {
      nums[i - gap] = nums[i];
    }
  }
  return numsLength - gap;
};
// @lc code=end

