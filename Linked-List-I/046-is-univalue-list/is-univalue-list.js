// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

//O(n) time and O(n) space where n is the number of nodes
const isUnivalueList = (head, currVal = head.val) => {
  if (head === null) return true;
  if (head.val !== currVal) return false;
  return isUnivalueList(head.next, currVal);
};

module.exports = {
  isUnivalueList,
};

// Write a function, isUnivalueList, that takes in the head of a linked list as an argument. The function should return a boolean indicating whether or not the linked list contains exactly one unique value.

// You may assume that the input list is non-empty.

// 7 -> 7 -> 4
//           h 
// currVal = 7