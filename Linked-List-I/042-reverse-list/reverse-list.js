// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

//O(n) time and O(n) space
const reverseList = (head, prev = null) => {
  if (head === null) return prev;
  const tempNext = head.next;
  head.next = prev;
  prev = head;
  return reverseList(tempNext, head);
};

module.exports = {
  reverseList,
};

// Write a function, reverseList, that takes in the head of a linked list as an argument. The function should reverse the order of the nodes in the linked list in-place and return the new head of the reversed linked list.

// null -> a -> b -> c -> d -> e -> f
//                                 p    h    n
// null -> f -> e -> d -> c -> b -> a -> null


// f -> e -> d -> c -> b -> a
