/*
 * @lc app=leetcode id=67 lang=typescript
 *
 * [67] Add Binary
 */

// @lc code=start
function addBinary(a: string, b: string): string {
  const sum = BigInt(`0b${a}`) + BigInt(`0b${b}`)
  return sum.toString(2)
};
// @lc code=end

