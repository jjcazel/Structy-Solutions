# class Node:
#   def __init__(self, val):
#     self.val = val
#     self.next = None
​
# O(n) time and O(n) space
# def linked_list_find(head, target):
#   if head is None: 
#     return False
  
#   if head.val == target:
#     return True
  
#   return linked_list_find(head.next, target)
    
# O(n) time and O(n) space  
def linked_list_find(head, target):
    while head is not None:
      if head.val == target:
        return True
      head = head.next
      
    return False
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