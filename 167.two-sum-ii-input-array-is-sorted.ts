/*
 * @lc app=leetcode id=167 lang=typescript
 *
 * [167] Two Sum II - Input Array Is Sorted
 */

// @lc code=start
function twoSum(numbers: number[], target: number): number[] {
  let left = 0;
  let right = numbers.length - 1;

  while (left !== right) {
    const sum = numbers[left] + numbers[right]
    if (sum === target) break
    else if (sum < target) left++
    else right--
  }
  return [left + 1, right + 1]
};
// @lc code=end

