/* eslint no-bitwise: ["error", { "allow": ["^"] }] */
/**
 *
 * Given a non-empty array of integers nums,
 * every element appears twice except for one. Find that single one.
 *
 * Follow up: Could you implement a solution with a linear
 * runtime complexity and without using extra memory?
 *
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => nums.reduce((a, c) => a ^ c);

export default singleNumber;
