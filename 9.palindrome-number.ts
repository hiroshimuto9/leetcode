/*
 * @lc app=leetcode id=9 lang=typescript
 *
 * [9] Palindrome Number
 */

// @lc code=start
function isPalindrome(x: number): boolean {
　const stringX = String(x)
  let start: number = 0;
  let end: number = stringX.length - 1;
  while(start < end) {
    if(stringX.charAt(start++) !== stringX.charAt(end--)) return false
  }
  return true
};
// @lc code=end

