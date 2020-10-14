import { LinkedList } from '../linked_list';
import reverseList from '../reverse_linked_list';

describe('reverse a linked list', () => {
  test('when head is null', () => {
    expect(reverseList(null)).toBeNull();
  });

  test('when head is undefined', () => {
    expect(reverseList()).toBeUndefined();
  });

  test('with values', () => {
    const list = new LinkedList();
    ([1, 2, 3, 4, 5, 6]).forEach(x => list.add(x));
    
    const head = reverseList(list.getHead());
    expect(head).not.toBeUndefined();
    expect(head.val).toEqual(6);
  });
});
