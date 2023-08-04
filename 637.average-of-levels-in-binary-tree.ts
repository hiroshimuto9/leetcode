/*
 * @lc app=leetcode id=637 lang=typescript
 *
 * [637] Average of Levels in Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function averageOfLevels(root: TreeNode | null): number[] {
  if (!root) return [];
  let nodeStack: TreeNode[] = [root];
  const output: number[] = [];

  while(nodeStack.length) {
    let sum = 0;
    const newStack: TreeNode[] = [];
    for (let node of nodeStack) {
      sum += node.val
      if (node.left) newStack.push(node.left);
      if (node.right) newStack.push(node.right);
    }
    output.push(sum / nodeStack.length)
    nodeStack = newStack
  }
  return output
};
// @lc code=end

