/*
 * @lc app=leetcode id=242 lang=typescript
 *
 * [242] Valid Anagram
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
  const sMap = new Map<string, number>();

  if (s.length !== t.length) return false
  for (const sChar of s) {
    if (sMap.has(sChar)) {
      sMap.set(sChar, sMap.get(sChar)! + 1);
    } else {
      sMap.set(sChar, 1);
    }
  }

  for (const tChar of t) {
    if (sMap.has(tChar) && sMap.get(tChar) !== 0) {
      sMap.set(tChar, sMap.get(tChar)! - 1);
    } else {
      return false
    }
  }
  return true
};
// @lc code=end

