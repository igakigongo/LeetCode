import { LinkedList } from './linked_list';
import PriorityQueue from './priority_queue';

export function mergeLists(lists) {
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
