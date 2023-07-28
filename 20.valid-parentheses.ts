/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
function isValid(s: string): boolean {
  const brackets: {[key: string]: string} = {
    ']': '[',
    '}': '{',
    ')': '('
  }
  const stack: string[] = [];
  for (const char of s.split('')) {
    if(['(', '[', '{'].includes(char)) {
      stack.push(char);
    } else if (stack.pop() !== brackets[char]) {
      return false
    }
  }
  return !stack.length
};
// @lc code=end

