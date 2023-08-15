/*
 * @lc app=leetcode id=274 lang=typescript
 *
 * [274] H-Index
 */

// @lc code=start
function hIndex(citations: number[]): number {
  citations.sort((a, b) => b - a);
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] <= i) return i;
  }
  return citations.length
};
// @lc code=end

