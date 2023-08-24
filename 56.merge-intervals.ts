/*
 * @lc app=leetcode id=56 lang=typescript
 *
 * [56] Merge Intervals
 */

// @lc code=start
function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0])
  let i = 1;

  while (i < intervals.length) {
    const [a, b] = intervals[i - 1];
    const [c, d] = intervals[i]

    if (b >= c) intervals.splice(i - 1, 2, [a, Math.max(b, d)]);
    else i++
  }
  return intervals
};
// @lc code=end

