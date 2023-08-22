/*
 * @lc app=leetcode id=49 lang=typescript
 *
 * [49] Group Anagrams
 */

// @lc code=start
function groupAnagrams(strs: string[]): string[][] {
  if (strs.length === 1) return [[strs[0]]]
  const map = new Map<string, string[]>()

  for (const str of strs) {
    const sorted = str.split('').sort().join('')
    if (!map.has(sorted)) {
      map.set(sorted, [])
    }
    map.get(sorted)?.push(str)
  }
  return Array.from(map.values())
};
// @lc code=end

