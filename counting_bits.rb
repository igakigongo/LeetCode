# Given a non negative integer number num. For every numbers i in the range 0 ≤ i ≤ num
# calculate the number of 1's in their binary representation and return them as an array.

# @param {Integer} num
# @return {Integer[]}
def count_bits(num)
  (0..num).map { |x| x.to_s(2).split("").count("1") }
end

p count_bits(10)
