/*
 * @lc app=leetcode id=13 lang=typescript
 *
 * [13] Roman to Integer
 */

// @lc code=start
function romanToInt(s: string): number {
  const roman = new Map();
  roman.set("I", 1).set("V", 5).set("X", 10).set("L", 50).set("C", 100).set("D", 500).set("M", 1000)
  const sList = [...s];
  let numbers: number[] = [];
  for (let i = 0; i < sList.length; i++) {
    if (roman.get(sList[i]) < roman.get(sList[i+1])) {
      const num = roman.get(sList[i+1]) - roman.get(sList[i]);
      numbers.push(num);
      i++
    } else {
      const num = roman.get(sList[i]);
      numbers.push(num);
    }
  }
  if (numbers.length > 1) {
    return numbers.reduce((sum, num) => {
      return sum + num;
    },0);
  } else {
    return numbers[0];
  }
};
// @lc code=end

