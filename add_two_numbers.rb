# Definition for singly-linked list.
class ListNode
  attr_accessor :val, :next

  def initialize(val)
    @val = val
    @next = nil
  end
end

# @param {ListNode} l1
# @param {ListNode} l2
# @return {ListNode}
def add_two_numbers(l1, l2)
  # state of resultant linked list
  head, tail = nil, nil

  carry, result = 0, ""
  until l1.nil? && l2.nil? && carry.zero?
    v1, v2 = (l1&.val || 0), (l2&.val || 0)
    sum = v1 + v2 + carry # old carry value
    carry = sum / 10

    # insert operation with O(1) time
    node = ListNode.new(sum % 10)
    if head.nil?
      head = tail = node
    else
      tail.next = node
      tail = node
    end
    l1, l2 = l1&.next, l2&.next
  end
  head
end

# create some variables
l1 = ListNode.new(2)
l1.next = ListNode.new(4)
l1.next.next = ListNode.new(3)

l2 = ListNode.new(5)
l2.next = ListNode.new(6)
l2.next.next = ListNode.new(4)

l3 = ListNode.new(5)
l3.next = ListNode.new(0)
l3.next.next = ListNode.new(4)
l3.next.next.next = ListNode.new(2)

l4 = ListNode.new(5)
l4.next = ListNode.new(8)
l4.next.next = ListNode.new(4)

l5 = ListNode.new(9)
l6 = ListNode.new(9)

p add_two_numbers(l1, l2)
p add_two_numbers(l3, l4)
p add_two_numbers(l5, l6)
