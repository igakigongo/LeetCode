# Fibonacci with recursion
# Get the n-th fibonacci number
def fib(n)
  n == 1 || n == 2 ? 1 : fib(n - 1) + fib(n - 2)
end

# Memoized solution
def fib_memoized(n, memo = {})
  return memo[n] if memo.has_key?(n)
  result = n == 1 || n == 2 ? 1 : fib_memoized(n - 1, memo) + fib_memoized(n - 2, memo)
  memo[n] = result
  result
end

# Bottom-Up Approach solution
def fib_bottom_up(n)
  a = [1, 2]
  return 1 if a.include?(n)
  memo = Hash[a.collect { |x| [x, 1] }]
  for i in 3..n
    memo[i] = memo[i - 1] + memo[i - 2]
  end
  memo[n]
end

# Bottom-Up Approach solution - Optimized Space
def fib_bottom_up_2(n)
  return 1 if [1, 2].include?(n)
  first, second = 1, 1
  for i in 3..n
    sum = first + second
    first, second = second, sum
  end
  sum
end

# for i in (1..10)
#   p fib_memoized(i)
# end
p fib(30)
p fib_memoized(50)
p fib_bottom_up(1000)
p fib_bottom_up_2(1000000)
