/*
 * @lc app=leetcode id=58 lang=typescript
 *
 * [58] Length of Last Word
 */

// @lc code=start
function lengthOfLastWord(s: string): number {
  const sList = s.split(" ").filter(s => s !== '');
  return sList[sList.length - 1].length;
};
// @lc code=end

