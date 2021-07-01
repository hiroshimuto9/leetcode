/*
 * @lc app=leetcode id=21 lang=typescript
 *
 * [21] Merge Two Sorted Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const x: ListNode = new ListNode();
  let currentNode: ListNode = x;
  while(l1 && l2) {
    if(l1.val < l2.val) {
      currentNode.next = l1
      l1 = l1.next
    } else {
      currentNode.next = l2
      l2 = l2.next
    }
    currentNode = currentNode.next
  }
  currentNode.next = l1 ?? l2;
  return x.next;
};
// @lc code=end

