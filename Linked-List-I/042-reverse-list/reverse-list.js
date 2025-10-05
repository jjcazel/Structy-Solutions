// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

//O(n) time and O(1) space
const reverseList = (head) => {
  let prev = null;
  let current = head;

  while (current !== null) {
    let tempNext = current.next; // null
    current.next = prev; // e
    prev = current; // f
    current = tempNext; // null
  }

  return prev;
};

module.exports = {
  reverseList,
};

// Write a function, reverseList, that takes in the head of a linked list as an argument. The function should reverse the order of the nodes in the linked list in-place and return the new head of the reversed linked list.

// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");
// const e = new Node("e");
// const f = new Node("f");

// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
// e.next = f;

// null -> a -> b -> c -> d -> e -> f -> null
//                                 prev curr next 

//  f -> e -> d -> c -> b -> a -> null

// reverseList(a); // f -> e -> d -> c -> b -> a 

// prev = null
// temp next
// replace current node's next with prev
// thn proceed with iteration by setting the current node to the temp next (which was the old next before resetting it)
// prev = 