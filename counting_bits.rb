# Given a non negative integer number num. For every numbers i in the range 0 ≤ i ≤ num
# calculate the number of 1's in their binary representation and return them as an array.

# @param {Integer} num
# @return {Integer[]}
def count_bits_basic(num)
  (0..num).map { |x| x.to_s(2).split("").count("1") }
end

@memo = {}

def counter(num)
  return @memo[num] if @memo.has_key?(num)
  return num if [0, 1].include?(num)
  result = counter(num / 2) + ((num % 2).positive? ? 1 : 0)
  @memo[num] = result
  return result
end

def count_bits(num)
  (0..num).map(&method(:counter))
end

p count_bits_basic(10)
# p count_bits(3)
p count_bits(7)
p count_bits(28)
p count_bits(31)
