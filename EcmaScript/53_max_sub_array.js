/**
 * 
 * Given an integer array nums, 
 * find the contiguous subarray (containing at least one number) 
 * which has the largest sum and return its sum.
 *
 * Follow up: If you have figured out the O(n) solution,
 * try coding another solution using the divide and conquer approach,
 * which is more subtle.
 * 
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
export const maxSubArray = nums => {

  let max = nums[0], sum = nums[0];
  for(let i = 1; i < nums.length; i += 1){
    if (nums[i] > sum){
      sum = nums[i];
    }else{
      sum += nums[i];
    }
    max = Math.max(sum, max);
  }
  
  return max;
};
