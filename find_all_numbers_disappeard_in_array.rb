# Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
# Find all the elements of [1, n] inclusive that do not appear in this array.
# Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

# @param {Integer[]} nums
# @return {Integer[]}
def find_disappeared_numbers(nums)
  return [] if (nums.empty? || nums.nil?)
  a = []
  0.upto(nums.length - 1).each do |i|
    val = nums[i].abs - 1
    nums[val] *= -1 if nums[val].positive?
  end

  0.upto(nums.length - 1).each do |i|
    a << (i + 1) if nums[i] > 0
  end
  a
end

p find_disappeared_numbers([4, 3, 2, 7, 8, 2, 3, 1])
