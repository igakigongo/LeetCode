# Definition for a binary tree node.
class TreeNode
  attr_accessor :val, :left, :right

  def initialize(val)
    @val = val
    @left, @right = nil, nil
  end
end

def insert(hash, node, level)
  return if node.nil?
  hash[level] += [node.val]

  insert(hash, node.left, level + 1)
  insert(hash, node.right, level + 1)
  hash
end

# @param {TreeNode} root
# @return {Integer[][]}
def level_order(root)
  return [] if root.nil?
  insert(Hash.new([]), root, 0).sort.map { |_, v| v }
end

root = TreeNode.new(3)
root.left = TreeNode.new(9)
root.right = TreeNode.new(20)

root.right.left = TreeNode.new(15)
root.right.right = TreeNode.new(7)

p level_order(root)
