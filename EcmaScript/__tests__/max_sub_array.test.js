import { maxSubArray } from '../53_max_sub_array';

describe('maximum sub array sum', () => {
  test('iterative', () => {
    const result = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])
    expect(result).toEqual(6);
  });
});
