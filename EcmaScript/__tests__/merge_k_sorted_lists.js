import { LinkedList } from '../linked_list';
import { mergeLists } from '../merge_k_sorted_lists';

describe('merge k sorted lists', () => {
  let arrays;

  beforeEach(() => {
    arrays = [[1, 4, 5], [1, 3, 4], [2, 6]];
  });

  it('creates a merged linked list - v2', () => {
    const lists = arrays.map(arr => {
      const list = new LinkedList()
      arr.forEach(ele => { list.add(ele); });
      return list.getHead();
    })
    const list = mergeLists(lists);
    expect(list).toBeTruthy();
    expect(list.val).toEqual(1);
  });
});
