/*
 * @lc app=leetcode id=27 lang=typescript
 *
 * [27] Remove Element
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
  const numsRemovedVal = nums.filter(num => num !== val);
  numsRemovedVal.forEach((num, index) => nums[index] = num);
  return numsRemovedVal.length;
};
// @lc code=end

