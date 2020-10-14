import { LinkedList } from '../linked_list';
import reverseList, { reverse } from '../reverse_linked_list';

describe('reverse a linked list', () => {
  test('when head is null', () => {
    expect(reverseList(null)).toBeNull();
  });

  test('when head is undefined', () => {
    expect(reverseList()).toBeUndefined();
  });

  describe('with values', () => {
    const createLinkedList = array => {
      const linkedList = new LinkedList();
      array.forEach(x => linkedList.add(x));
      return linkedList;
    }

    test('iteratively', () => {
      const list = createLinkedList([1]);
      const head = reverseList(list.getHead());
      expect(head).not.toBeUndefined();
      expect(head.val).toEqual(1);
    });

    test('recursively', () => {
      const list = createLinkedList([1, 2, 3, 6]);
      const head = reverse(list.getHead());
      expect(head).not.toBeUndefined();
      expect(head.val).toEqual(6);
    });
  });
});
