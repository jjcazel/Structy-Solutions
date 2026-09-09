class Node:
  def __init__(self, val):
    self.val = val
    self.next = None

# O(n) time and O(1) space
def insert_node(head, value, index):
  if index == 0:
    new_node = Node(value)
    new_node.next = node
    return new_node

  current = head
  prev = None

  while current is not None:
    if index == 0:
      new_node = Node(value)
      new_node.next = current
      prev.next = new_node
      return head

    prev = current
    current = current.next
    index -= 1

  prev.next = Node(value)
  return head

# insert_node(a, x, 2)
# a -> b -> c
# current = Node(c)
# prev = Node(b)
# index = 0
# new_head = Node(x)
