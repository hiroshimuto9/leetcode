/*
 * @lc app=leetcode id=205 lang=typescript
 *
 * [205] Isomorphic Strings
 */

// @lc code=start
function isIsomorphic(s: string, t: string): boolean {
  const mapS = new Map<string, number>();
  const mapT = new Map<string, number>();
  for (let i = 0; i < s.length; i++) {
    if (mapS.get(s[i]) !== mapT.get(t[i])) {
      return false;
    }
    mapS.set(s[i], i);
    mapT.set(t[i], i);
  }
  return true
};
// @lc code=end

