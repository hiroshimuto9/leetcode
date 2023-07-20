/*
 * @lc app=leetcode id=383 lang=typescript
 *
 * [383] Ransom Note
 */

// @lc code=start
function canConstruct(ransomNote: string, magazine: string): boolean {
  let mapChars = new Map<string, number>();
  for (const char of magazine) {
    if (mapChars.has(char)) {
      mapChars.set(char, mapChars.get(char)! + 1);
    } else {
      mapChars.set(char, 1);
    }
  }
  for (const char of ransomNote) {
    if (mapChars.get(char)) {
      mapChars.set(char, mapChars.get(char)! - 1);
    } else {
      return false
    }
  }
  return true
};
// @lc code=end

