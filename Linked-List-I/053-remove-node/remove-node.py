# class Node:
#   def __init__(self, val):
#     self.val = val
#     self.next = None

# O(n) time and O(1) space
def remove_node(head, target_val):
  current = head
  prev = None
  if head.val == target_val:
    return head.next

  while current is not None:
    if current.val == target_val:
      prev.next = current.next
      return head
      
    prev = current
    current = current.next


