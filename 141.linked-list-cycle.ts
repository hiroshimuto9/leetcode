/*
 * @lc app=leetcode id=141 lang=typescript
 *
 * [141] Linked List Cycle
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

function hasCycle(head: ListNode | null): boolean {
  if (!head || !head.next || !head.next.next) return false;
  let slowHead = head.next
  let fastHead = head.next.next
  while (fastHead && slowHead && fastHead.next?.next && slowHead.next) {
    if (fastHead === slowHead) return true
    slowHead = slowHead.next
    fastHead = fastHead.next.next
  }
  return false;
};
// @lc code=end

