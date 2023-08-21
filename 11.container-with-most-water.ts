/*
 * @lc app=leetcode id=11 lang=typescript
 *
 * [11] Container With Most Water
 */

// @lc code=start
function maxArea(height: number[]): number {
  let area = 0
  let left = 0
  let right = height.length - 1
  while (left < right) {
    const x = right - left;
    const y = Math.min(height[left], height[right]);
    area = Math.max(area, x * y)
    if (height[left] > height[right]) {
      right = right - 1;
    } else {
      left = left + 1;
    }
  }
  return area
};
// @lc code=end

