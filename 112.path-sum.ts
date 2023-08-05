/*
 * @lc app=leetcode id=112 lang=typescript
 *
 * [112] Path Sum
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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if(!root) return false;
  if(!root.left && !root.right) return root.val === targetSum;

  const leftSum = hasPathSum(root.left, targetSum - root.val);
  const rightSum = hasPathSum(root.right, targetSum - root.val);

  return leftSum || rightSum
};
// @lc code=end

