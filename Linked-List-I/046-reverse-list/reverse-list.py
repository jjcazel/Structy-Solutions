# class Node:
#   def __init__(self, val):
#     self.val = val
#     self.next = None

# O(n) time and O(n) space
def reverse_list(head, prev = null):
  if (head == None):
    return prev
  next = head.next
  head.next = prev
  return reverse_list(next, head)
  
