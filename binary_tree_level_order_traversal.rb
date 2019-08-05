# Definition for a binary tree node.
class TreeNode
  attr_accessor :val, :left, :right

  def initialize(val)
    @val = val
    @left, @right = nil, nil
  end
end

# @param {TreeNode} root
# @return {Integer[][]}
def level_order(root)
  return [] if root.nil?
  result, stack = [], Array.new([root])

  until stack.empty?
    result << []
    temp = []
    stack.each do |node|
      result[-1] << node.val && temp += [node.left, node.right] unless node.nil?
    end

    stack = temp
  end
  result.pop()
  result
end

root = TreeNode.new(3)
root.left = TreeNode.new(9)
root.right = TreeNode.new(20)

root.right.left = TreeNode.new(15)
root.right.right = TreeNode.new(7)

p level_order(root)
