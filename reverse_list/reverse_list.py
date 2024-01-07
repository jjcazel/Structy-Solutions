# class Node:
#   def __init__(self, val):
#     self.val = val
#     self.next = None
​
# 
def reverse_list(head):
  prev = None
  while head is not None:
    next = head.next
    head.next = prev
    prev = head
    head = next
    
  return prev
​
​
​
​
​
​
​
​
​
​
​
​
​
​
​
​
​
​
​
#   while head is not None: