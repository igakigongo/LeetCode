# Given an array of integers, return indices of the two numbers such that they add up to a specific target.
# You may assume that each input would have exactly one solution, and you may not use the same element twice.

def two_sum(nums, target)
  hash = {}

  nums.each_with_index do |ele, i|
    compl = target - ele
    if hash.keys.include?(compl)
      return [hash[compl], i]
      break
    end
    hash[ele] = i
  end
end

p two_sum([2, 7, 11, 15], 9)
