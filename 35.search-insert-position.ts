/*
 * @lc app=leetcode id=35 lang=typescript
 *
 * [35] Search Insert Position
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
  let indexOfTarget = nums.indexOf(target);
  if (indexOfTarget !== -1) {
    return indexOfTarget;
  }

  nums.every((num, index) => {
    if (num > target) {
      indexOfTarget = index
      return false
    }
    if (index === nums.length - 1) {
      indexOfTarget = nums.length;
      return false
    }
    if (num < target && target < nums[index + 1]) {
      indexOfTarget = index + 1;
      return false
    }
    return true
  })
  return indexOfTarget
};
// @lc code=end

