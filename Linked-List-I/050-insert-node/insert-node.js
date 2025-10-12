class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// O(n) time and O(1) space where n is the number of nodes
const insertNode = (head, value, index) => {
  if (index === 0) {
    const newNode = new Node(value);
    newNode.next = head;
    return newNode;
  }
  let current = head;
  let count = 0; 

  while (current !== null) {
    if (count === index - 1) {
      const newNode = new Node(value);
      const tempNext = current.next;
      current.next = newNode;
      newNode.next = tempNext;
      return head;
    }
    count += 1;
    current = current.next;
  }
};

module.exports = {
  insertNode,
};

// Write a function, insertNode, that takes in the head of a linked list, a value, and an index. The function should insert a new node with the value into the list at the specified index. Consider the head of the linked list as index 0. The function should return the head of the resulting linked list.

// Do this in-place.

// You may assume that the input list is non-empty and the index is not greater than the length of the input list.

//  x -> a  ->  b  -> c 
// curr

// count = 1
// insertNode(a, 'x', 0);