/*
 * @lc app=leetcode id=290 lang=typescript
 *
 * [290] Word Pattern
 */

// @lc code=start
function wordPattern(pattern: string, s: string): boolean {
  const pMap = new Map<string, number>();
	const sMap = new Map<string, number>();
	const splitS = s.split(' ');

  if (pattern.length !== splitS.length) return false;

  for (let i = 0; i < pattern.length; i++) {
    if (!pMap.has(pattern[i])) pMap.set(pattern[i], i);
    if (!sMap.has(splitS[i])) sMap.set(splitS[i], i)
  }

  for (let i = 0; i < pattern.length; i++) {
    if (sMap.get(splitS[i])! !== pMap.get(pattern[i])) {
      return false
    }
  }
  return true
};
// @lc code=end

