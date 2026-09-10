# class Node:
#   def __init__(self, val):
#     self.val = val
#     self.left = None
#     self.right = None

# O(n) time and O(n) space
def depth_first_values(root):
  if root is None:
    return []
  dfs_nodes = []
  stack = [ root ]

  while len(stack) > 0:
    curr_node = stack.pop()
    dfs_nodes.append(curr_node.val)
    if curr_node.right:
      stack.append(curr_node.right)
    if curr_node.left:
      stack.append(curr_node.left)

  return dfs_nodes
