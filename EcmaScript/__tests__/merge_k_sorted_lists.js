import { 
  createMapOfLinkedLists, 
  getMapKeyWithMinValue,
  mergeLists,
} from '../merge_k_sorted_lists';

describe('merge k sorted lists', () => {
  it('gets key with min value', () => {
    const map = createMapOfLinkedLists([[2, 3, 5], [1, 3, 5], [3, 5, 7]]);
    const key = getMapKeyWithMinValue(map);
    expect(key).toEqual(1);
  });

  it('creates a merged linked list', () => {
    const arrays = [
      [1, 4, 5],
      [1, 3, 4],
      [2, 6]
    ];
    const list = mergeLists(arrays);
    expect(list).toBeTruthy();
    expect(list.val).toEqual(1);
    
  });
});
