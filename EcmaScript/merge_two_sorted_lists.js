import { LinkedList } from './linked_list';

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = (l1, l2) => {
  if (!l1 && !l2) return null;
  if (!l1 && l2) return l2;
  if (l1 && !l2) return l1;

  const result = new LinkedList();

  let list1 = l1; let
    list2 = l2;
  while (list1 && list2) {
    if (list1.val > list2.val) {
      result.add(list2.val);
      list2 = list2.next;
    } else {
      result.add(list1.val);
      list1 = list1.next;
    }
  }

  while (list1) {
    result.add(list1.val);
    list1 = list1.next;
  }

  while (list2) {
    result.add(list2.val);
    list2 = list2.next;
  }

  return result.getHead();
};

export default mergeTwoLists;
