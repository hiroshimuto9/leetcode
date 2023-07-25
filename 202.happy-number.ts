/*
 * @lc app=leetcode id=202 lang=typescript
 *
 * [202] Happy Number
 */

// @lc code=start
function isHappy(n: number): boolean {
  const resultList: number[] = [];
  let calculation = n;
  while (calculation !== 1) {
    const numStr = calculation.toString();
    let temp = 0

    for (let i = 0; i < numStr.length; i++) {
      temp += Math.pow(Number(numStr[i]), 2)
    }

    if (resultList.includes(temp)) return false;
    resultList.push(temp);
    calculation = temp;
  }
  return true
};
// @lc code=end

