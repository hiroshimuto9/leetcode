/*
 * @lc app=leetcode id=530 lang=typescript
 *
 * [530] Minimum Absolute Difference in BST
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

function getMinimumDifference(root: TreeNode | null): number {
  let minimum = Infinity;
  let prevNode
  function inOrder(node: TreeNode) {
    if(!node) return;
    inOrder(node.left);

    if(prevNode) {
      minimum = Math.min(minimum, node.val - prevNode.val);
    }
    prevNode = node;
    inOrder(node.right)
  }
  inOrder(root);
  return minimum
};

// @lc code=end

