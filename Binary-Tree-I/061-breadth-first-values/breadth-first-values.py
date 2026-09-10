# class Node:
#   def __init__(self, val):
#     self.val = val
#     self.left = None
#     self.right = None

from collections import deque

# O(n) time and O(n) space
def breadth_first_values(root):
  if root is None:
    return []

  queue = deque([ root ])
  vals = []
  
  while queue:
    curr_node = queue.popleft()
    vals.append(curr_node.val)

    if curr_node.left:
      queue.append(curr_node.left)
    if curr_node.right:
      queue.append(curr_node.right)

  return vals

