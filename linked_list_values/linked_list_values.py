
# recursive
#O(n) time | O(n) space where n is the number of nodes in the linked_list
def linked_list_values(head):
  values = []
  fill_values(head, values)
  return values
  
def fill_values(head, values):
  if head is None: 
    return 
  values.append(head.val) 
  fill_values(head.next, values)
  
# iterative
# def linked_list_values(head):
#   list = []
#   current = head
#   while current is not None:
#     list.append(current.val)
#     current = current.next
    
#   return list
​
​
# print(linked_list_values(a))
