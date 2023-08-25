/*
 * @lc app=leetcode id=57 lang=typescript
 *
 * [57] Insert Interval
 */

// @lc code=start
function insert(intervals: number[][], newInterval: number[]): number[][] {
  intervals.forEach(([start, end]: number[]) => {
    if (start <= newInterval[0] && end >= newInterval[0]) {
      newInterval[0] = start
    }
    if (start <= newInterval[1] && end >= newInterval[1]) {
      newInterval[1] = end
    }
  })

  const left: number[][] = []
  const right: number[][] = []

  while (intervals.length > 0) {
    const interval: number[] = intervals.shift()!
    if (interval[0] > newInterval[1]) {
      right.push(interval)
    } else if (interval[1] < newInterval[0]) {
      left.push(interval)
    }
  }
  return [...left, newInterval, ...right]
};
// @lc code=end

