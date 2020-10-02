import {
  ListNode, 
  removeHead 
} from '../merge_k_sorted_lists';

describe('removeHead', () => {
  test('returns truthy value', () => {
    var node = new ListNode(30, new ListNode(36));
    removeHead(node);
    expect(node).toBeTruthy();
  });

  test('replaces node', () => {
    let node = new ListNode(30, new ListNode(36));
    node = removeHead(node);
    expect(node.val).toEqual(36);
  });

  test('returns falsy', () => {
    let node = null;
    node = removeHead(node);
    expect(node).toBeFalsy();
  });
});
