# Given a binary tree, you need to compute the length of the diameter of the tree.
# The diameter of a binary tree is the length of the longest path between any two nodes in a tree.
# This path may or may not pass through the root.

# Definition for a binary tree node.
class TreeNode
  attr_accessor :val, :left, :right, :max_depth

  def initialize(val)
    @val = val
    @left, @right = nil, nil
    @max_depth = 0
  end

  def max_depth(node = self)
    return 0 if node.nil?

    l_depth = max_depth(node.left)
    r_depth = max_depth(node.right)
    @max_depth = [@max_depth, l_depth + r_depth].max
    ([l_depth, r_depth].max) + 1
  end

  def diameter
    self.max_depth()
    @max_depth
  end
end

# @param {TreeNode} root
# @return {Integer}
def diameter_of_binary_tree(root)
  root.nil? ? 0 : root.diameter
end
