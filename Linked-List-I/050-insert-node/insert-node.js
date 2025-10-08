// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

//O(n) time and O(1) space
const insertNode = (head, value, index) => {
  if (index === 0) {
    const newNode = new Node(value);
    newNode.next = head;
    return newNode;
  }
  let prev = null;
  let current = head;

  while (current !== null) {
    if (index === 0) {
      const newNode = new Node(value);
      prev.next = newNode;
      newNode.next = current;
      return head;
    }
    index -= 1;
    prev = current;
    current = current.next;
  }

  prev.next = new Node(value);
  return head;
};

module.exports = {
  insertNode,
};

// Write a function, insertNode, that takes in the head of a linked list, a value, and an index. The function should insert a new node with the value into the list at the specified index. Consider the head of the linked list as index 0. The function should return the head of the resulting linked list.
 
// Do this in-place.

// You may assume that the input list is non-empty and the index is not greater than the length of the input list.

//       a -> b -> c -> d
//               prev curr
// insertNode(a, 'x', 2);
// a -> b -> x -> c -> d
