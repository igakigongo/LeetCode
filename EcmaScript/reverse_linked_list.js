import { LinkedList } from './linked_list';

/**
 * Reverses a singly linked list - iteratively in O(n) time complexity
 * @param {ListNode} head 
 */
const reverseList = head => {
  if(head === null) return null;
  if(typeof head === 'undefined') return undefined;

  const array  = [];
  let current_pointer = head;
  while(current_pointer){
    array.push(current_pointer.val);
    current_pointer = current_pointer.next;
  }
  
  const result = new LinkedList();
  while(array.length > 0){
    result.add(array.pop());
  }

  return result.getHead();
};



export default reverseList;
