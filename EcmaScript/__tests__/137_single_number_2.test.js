import { singleNumber, singleNumberTwo } from '../137_single_number_2';

describe('single number 2', () => {
  it('yields correctly', () => {
    expect(singleNumber([2, 2, 3, 2])).toEqual(3);
    expect(singleNumber([0, 1, 0, 1, 0, 1, 99])).toEqual(99);
    expect(singleNumber([1, 1, 1, 99])).toEqual(99);
    expect(singleNumber([8, 8, 8, 99])).toEqual(99);
  });

  it('also works', () => {
    expect(singleNumberTwo([2, 2, 3, 2])).toEqual(3);
    expect(singleNumberTwo([0, 1, 0, 1, 0, 1, 99])).toEqual(99);
    expect(singleNumberTwo([1, 1, 1, 99])).toEqual(99);
    expect(singleNumberTwo([8, 8, 8, 99])).toEqual(99);
  });
});
