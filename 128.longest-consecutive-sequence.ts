/*
 * @lc app=leetcode id=128 lang=typescript
 *
 * [128] Longest Consecutive Sequence
 */

// @lc code=start
function longestConsecutive(nums: number[]): number {
  // nums.sort((a, b) => a - b)
  // if (nums.length < 2) return nums.length
  // let max = 0
  // let current = nums[0]
  // let count = 1;
  // for (let i = 1; i < nums.length; i++) {
  //   const num = nums[i]
  //   if (num === current) continue
  //   if (num === current + 1) {
  //     count++
  //   } else {
  //     max = count > max ? count : max
  //     count = 1
  //   }
  //   current = num
  // }
  // return count > max ? count : max

  // 配列のソートがO(n log n)
  const numSet = new Set(nums)
  let max = 0

  for (const num of numSet) {
    if (!numSet.has(num - 1)) {
      let currentNum = num
      let count = 1;

      while (numSet.has(currentNum + 1)) {
        currentNum += 1
        count++
      }

      max = Math.max(max, count)
    }
  }
  return max
};
// @lc code=end

