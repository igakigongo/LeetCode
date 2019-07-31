class ListNode
  attr_accessor :val, :next

  def initialize(val)
    @val = val
    @next = nil
  end
end

def to_number(list_node)
  number, multiplier = 0, 1
  node = list_node
  while !node.nil?
    number += node.val * multiplier
    multiplier *= 10
    node = node.next
  end
  number
end

def get_tail_node(node)
  return nil if node.nil?
  current = node
  until current.next.nil?
    current = current.next
  end
  current
end

def to_list(number)
  n, node = number.to_s.reverse!, nil
  start, len = 0, n.length
  while start < len
    tail = get_tail_node(node)
    new_node = ListNode.new(n[start].to_i)
    if tail.nil?
      node = new_node
    else
      tail.next = new_node
    end
    start += 1
  end
  node
end

def add_two_numbers(l1, l2)
  to_list(to_number(l1) + to_number(l2))
end

# create some variables
l1 = ListNode.new(2)
l1.next = ListNode.new(4)
l1.next.next = ListNode.new(3)

l2 = ListNode.new(5)
l2.next = ListNode.new(6)
l2.next.next = ListNode.new(4)

p to_list(to_number(l1) + to_number(l2))
