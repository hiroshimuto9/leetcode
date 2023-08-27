/*
 * @lc app=leetcode id=155 lang=typescript
 *
 * [155] Min Stack
 */

// @lc code=start
interface Stack {
	val: number;
	min: number;
}

class MinStack {
	private stack: Stack[] = [];
	constructor() {
		this.stack = [];
	}

	push(val: number): void {
		this.stack.push({
			val,
			min: this.stack.length === 0 ? val : Math.min(val, this.getMin())
		})
	}

	pop(): void {
		this.stack.pop()
	}

	top(): number {
		return this.stack[this.stack.length - 1].val
	}

	getMin(): number {
		return this.stack.length === 0 ? 0 : this.stack[this.stack.length - 1].min
	}
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

