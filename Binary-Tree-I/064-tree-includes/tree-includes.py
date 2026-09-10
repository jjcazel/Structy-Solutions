# class Node:
#   def __init__(self, val):
#     self.val = val
#     self.left = None
#     self.right = None

from collections import deque

# O(n) time and O(1) space
def tree_includes(root, target):
  stack = deque([ root ])

  while stack:
    curr_node = stack.popleft()
    if curr_node.val == target:
      return True
    if curr_node.left:
      stack.append(curr_node.left)
    if curr_node.right:
      stack.append(curr_node.right)

  return False












  
  
  
  









  



# O(n) time and O(n) space
# def tree_includes(root, target):
#   if root is None:
#     return False
#   if root.val == target:
#     return True
  
#   return tree_includes(root.left, target) or tree_includes(root.right, target)


# O(n) time and O(n) space
# from collections import deque

# def tree_includes(root, target):
#   q = deque([ root ])
  
#   while q:
#     current = q.popleft()
#     if current and current.val == target:
#       return True
#     elif current:
#       q.append(current.left)
#       q.append(current.right)
    
#   return False


# O(n) time and O(n) space
# def tree_includes(root, target):
#   stack = [ root ]
  
#   while stack:
#     current = stack.pop()
#     if current is not None and current.val == target:
#       return True
#     elif current:
#       stack.append(current.left)
#       stack.append(current.right)
      
#   return False