/*
 * @lc app=leetcode id=134 lang=typescript
 *
 * [134] Gas Station
 */

// @lc code=start
function canCompleteCircuit(gas: number[], cost: number[]): number {
  let tank = 0, start = 0, current = 0
  for (let i = 0; i < gas.length; i++) {
    current += gas[i] - cost[i]
    tank += gas[i] - cost[i]
    if (current < 0) {
      start = i + 1;
      current = 0
    }
  }
  return tank >= 0 ? start : -1
};
// @lc code=end

