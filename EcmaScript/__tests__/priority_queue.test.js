import { ListNode } from '../linked_list';
import PriorityQueue from '../priority_queue';

describe('priority queue', () => {
  let queue;

  beforeEach(() => {
    queue = new PriorityQueue(4);
  });

  it('adds', () => {
    const node = new ListNode(3);
    queue.add(node);
    expect(queue.isEmpty()).toBe(false);
  });

  it('orders nodes', () => {
    const nodes = [5, 3, 2, 10].map((x) => new ListNode(x));
    nodes.forEach((node) => queue.add(node));
    expect(queue.first().val).toEqual(2);
    expect(queue.size()).toEqual(4);
  });
});
