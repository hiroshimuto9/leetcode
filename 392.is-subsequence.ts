/*
 * @lc app=leetcode id=392 lang=typescript
 *
 * [392] Is Subsequence
 */

// @lc code=start
function isSubsequence(s: string, t: string): boolean {
  let indexCount = 0;
  for (let i = 0; i < t.length; i++) {
    if (t[i] === s[indexCount]) {
      indexCount++;
    }
  }
  return indexCount === s.length;
};
// @lc code=end

