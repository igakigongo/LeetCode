import { PriorityQueue } from './priority_queue';

// Definition for singly-linked list.
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

function mergeLists(lists) {
  if (lists.length === 0 || lists.every(l => !l)) {
    return null;
  }

  const result = new LinkedList();

  const queue = new PriorityQueue();
  lists.forEach(nodeList => {
    nodeList && queue.add(nodeList)
  });

  while (!queue.isEmpty()) {
    const node = queue.dequeue();
    if (node) {
      result.add(node.val);
      if (node.next) {
        queue.add(node.next);
      }
    }
  }

  return result.getHead();
}

module.exports = {
  LinkedList,
  ListNode,
  mergeLists
};
