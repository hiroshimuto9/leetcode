/*
 * @lc app=leetcode id=125 lang=typescript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
function isPalindrome(s: string): boolean {
  const lowerS = s.toLowerCase();
  const excludedS = lowerS.replace(/[^0-9a-z]/gi,'');
  const length = excludedS.length;
  for (let i = 0; i < length/2; i++) {
    if (excludedS[i] !== excludedS[length-1-i]) {
      return false;
    }
  }
  return true;
};
// @lc code=end

