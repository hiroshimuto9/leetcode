/*
 * @lc app=leetcode id=228 lang=typescript
 *
 * [228] Summary Ranges
 */

// @lc code=start
function summaryRanges(nums: number[]): string[] {
  const output: string[] = [];
  let startNum = nums[0];

  for (let i = 1; i <= nums.length; i++) {
    if (nums[i] - nums[i - 1] === 1) continue
    const str = (startNum === nums[i-1]) ? `${startNum}` : `${startNum}->${nums[i-1]}`
    output.push(str)
    startNum = nums[i]
  }
  return output
};
// @lc code=end

