## linked list values

Write a function, *linked\_list\_values*, that takes in the head of a linked list as an argument. The
function should return a list containing all values of the nodes in the linked list.

_Hey. This is our first linked list problem, so you should be liberal with watching the Approach and
Walkthrough. Be productive! -AZ_

#### test_00:

```python
a = Node("a")
b = Node("b")
c = Node("c")
d = Node("d")

a.next = b
b.next = c
c.next = d

# a -> b -> c -> d

linked_list_values(a) # -> [ 'a', 'b', 'c', 'd' ]
```

#### test_01:

```python
x = Node("x")
y = Node("y")

x.next = y

# x -> y

linked_list_values(x) # -> [ 'x', 'y' ]
```

#### test_02:

```python
q = Node("q")

# q

linked_list_values(q) # -> [ 'q' ]
```

#### test_03:

```python
linked_list_values(None) # -> [ ]
```
