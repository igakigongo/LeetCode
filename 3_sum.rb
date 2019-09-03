def three_sum(nums)
  arr = nums.combination(3).to_a.select { |a| a.sum == 0 }
  out = []
  arr.each do |a|
    out << a.sort if !out.any? { |ele| ele == a.sort }
  end
  out
end

def three_sum_2(num)
  num.sort!
  p num
  res = []
  0.upto(num.length - 2) do |i|
    if (i == 0 || (i > 0 && num[i] != num[i - 1]))
      lo = i + 1
      hi = num.length - 1
      sum = 0 - num[i]
      while lo < hi
        if (num[lo] + num[hi] == sum)
          res << [num[i], num[lo], num[hi]]
          while (lo < hi && num[lo] == num[lo + 1])
            lo += 1
          end
          while (lo < hi && num[hi] == num[hi - 1])
            hi -= 1
          end
          lo += 1
          hi -= 1
        elsif (num[lo] + num[hi] < sum)
          lo += 1
        else
          hi -= 1
        end
      end
    end
  end
  res
end

p three_sum_2([-1, 0, 1, 2, -1, -4])
# [[-1, 0, 1], [-1, -1, 2]]

p three_sum_2([0, 3, 0, 1, 1, -1, -5, -5, 3, -3, -3, 0])
#[[-3, 0, 3], [0, 0, 0], [-1, 0, 1]]
