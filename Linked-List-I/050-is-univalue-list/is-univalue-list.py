# class Node:
#   def __init__(self, val):
#     self.val = val
#     self.next = None

# O(n) time and O(1) space
def is_univalue_list(head):
  curr_val = head.val
  curr_node = head

  while curr_node is not None:
    if curr_node.val != curr_val:
      return False
    curr_node = curr_node.next

  return True
