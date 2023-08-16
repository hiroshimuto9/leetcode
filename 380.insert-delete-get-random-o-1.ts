/*
 * @lc app=leetcode id=380 lang=typescript
 *
 * [380] Insert Delete GetRandom O(1)
 */

// @lc code=start
class RandomizedSet {
  private items: number[];
  constructor() {
    this.items = [];
  }

  insert(val: number): boolean {
    if (this.items.includes(val)) {
      return false
    }
    this.items.push(val)
    return true
  }

  remove(val: number): boolean {
    if (!this.items.includes(val)) {
      return false
    }
    this.items = this.items.filter(item => item !== val)
    return true
  }

  getRandom(): number {
    const itemsLength = this.items.length
    const randomIndex = Math.floor(Math.random() * itemsLength)
    return this.items[randomIndex]
  }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// @lc code=end

