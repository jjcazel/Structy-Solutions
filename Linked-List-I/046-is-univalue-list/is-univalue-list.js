// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// O(n) time and O(n) space where n is te number of nodes
const isUnivalueList = (head, prev = head) => {
  if (head === null) return true;
  if (head.val !== prev.val) return false;
  return isUnivalueList(head.next, head);
};

module.exports = {
  isUnivalueList,
};

// Write a function, isUnivalueList, that takes in the head of a linked list as an argument. The function should return a boolean indicating whether or not the linked list contains exactly one unique value.

// You may assume that the input list is non-empty.

