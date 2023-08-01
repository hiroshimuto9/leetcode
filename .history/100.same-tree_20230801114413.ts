/*
 * @lc app=leetcode id=100 lang=typescript
 *
 * [100] Same Tree
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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p !== q) return false
  let pLeftNode;
  let pRightNode;
  let qLeftNode;
  let qRightNode;
  if (p.left === q.left && p.right === q.right) {
    isSameTree(pLeftNode, qLeftNode);
    isSameTree(pRightNode, qRightNode);
  } else {
    return false
  }
  return true
};
// @lc code=end

