import { ListNode } from './linked_list';

/**
 * Reverses a singly linked list - iteratively in O(n) time complexity
 * @param {ListNode} head 
 */
const reverseList = head => {
  if (head === null) return null;
  if (typeof head === 'undefined') return undefined;

  let current = head;

  if (!current.next) return current;

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

export const reverseV2 = head => {
  if (head === null) return null;
  if (typeof head === 'undefined') return undefined;

  let current = head;

  if (!current.next) return current;

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

export default reverseList;
