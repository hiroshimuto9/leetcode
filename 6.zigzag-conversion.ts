/*
 * @lc app=leetcode id=6 lang=typescript
 *
 * [6] Zigzag Conversion
 */

// @lc code=start
function convert(s: string, numRows: number): string {
  if (numRows === 1) return s
  const stack = new Array(numRows).fill('')
  let index = 0
  let zigzag = false

  for (const char of s) {
    stack[index] += char
    if (index === numRows - 1 && !zigzag) zigzag = true
    if (index === 0 && zigzag) zigzag = false
    zigzag ? index-- : index++
  }

  return stack.join('')
};
// @lc code=end

