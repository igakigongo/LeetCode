/* eslint-disable no-param-reassign */
import { ListNode } from './linked_list';

/**
 * Reverses a singly linked list - iteratively in O(n) time complexity
 * @param {ListNode} head
 */
const reverseList = (head) => {
  if (head === null || typeof head === 'undefined') return head;

  let current = head;
  let pointer;

  while (current) {
    if (head === current) {
      pointer = new ListNode(current.val);
    } else {
      pointer = new ListNode(current.val, pointer);
    }
    current = current.next;
  }

  return pointer;
};

export const reverse = (head, prev = null) => {
  if (head === null || typeof head === 'undefined') return prev;

  prev = new ListNode(head.val, prev);
  return reverse(head.next, prev);
};

export default reverseList;
