function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function LinkedList() {
  let head, tail;

  return {
    add: (value) => {
      const node = new ListNode(value);
      if (head) {
        tail.next = node;
      } else {
        head = node;
      }
      tail = node;
    },
    getHead: () => head
  };
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  if (!l1 && !l2) return null;
  if (!l1 && l2) return l2;
  if (l1 && !l2) return l1;

  const result = new LinkedList();

  while (l1 && l2) {
    if (l1.val > l2.val) {
      result.add(l2.val);
      l2 = l2.next;
    } else {
      result.add(l1.val);
      l1 = l1.next;
    }
  }

  while (l1) {
    result.add(l1.val);
    l1 = l1.next;
  }

  while (l2) {
    result.add(l2.val);
    l2 = l2.next;
  }

  return result.getHead();
};
