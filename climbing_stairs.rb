# You are climbing a stair case. It takes n steps to reach to the top.
# Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
# Note: Given n will be a positive integer.

# Recursive version
def climb_stairs(n)
  return 0 if n.negative?
  n.zero? ? 1 : climb_stairs(n - 1) + climb_stairs(n - 2)
end

# Memoized solution
def climb_stairs_memoized(n, memo = {})
  return memo[n] if memo.has_key?(n)
  return 0 if n.negative?
  result = n.zero? ? 1 : climb_stairs_memoized(n - 1, memo) + climb_stairs_memoized(n - 2, memo)
  memo[n] = result
  result
end

# p climb_stairs(40)
p climb_stairs_memoized(40)
p climb_stairs_memoized(1000)
