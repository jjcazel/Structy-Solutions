# class Node:
#   def __init__(self, val):
#     self.val = val
#     self.next = None

# O(n) time and O(n) space
def linked_list_values(head):
  list_vals = []
  current = head

  while current is not None:
    list_vals.append(curent.val)
    current = current.next

  return list_vals
