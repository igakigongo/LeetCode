/*
  Given a non-empty array of integers, 
  every element appears three times except for one, which appears exactly once. 
  Find that single one.

  Note:

  Your algorithm should have a linear runtime complexity. 
  Could you implement it without using extra memory?
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
export const singleNumber = nums => {
  let ones = 0, twos = 0;
  for (const num of nums) {
    ones = (ones ^ num) & (~twos);
    twos = (twos ^ num) & (~ones);
  }

  return ones;
};

export const singleNumberTwo = nums => {
  let sum = 0;

  for (let i = 0; i < 32; i += 1) {
    const count = nums
      .reduce((a, c) => a + (((c >> i) & 1) ? 1: 0), 0);
    
    const mod = count % 3;
    if (mod === 0) continue;
    sum |= 1 << i;
  }

  return sum;
};
