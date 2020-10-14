// Definition for singly-linked list.
export function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

export function LinkedList() {
  let head; let
    tail;

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
    getHead: () => head,
  };
}
