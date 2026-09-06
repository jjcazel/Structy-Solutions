class Node:
  def __init__(self, val):
    self.val = val
    self.next = None

# O(n) time and O(1) space
def merge_lists(head_1, head_2):
  current1 = head_1
  current2 = head_2
  dummy_node = Node(None, None)
  tail = dummy_node

  while current1 is not None and current2 is not None:
    if current1.val < current2.val:
      tail.next = current1
      current1 = current1.next
    else:
      tail.next = current2
      current2 = current2.next
    tail = tail.next

  if current1:
    tail.next = current1
  if current2:
    tail.next = current2

  return dummy_node.next
