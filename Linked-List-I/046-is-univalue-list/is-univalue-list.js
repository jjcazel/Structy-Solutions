// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// O(n) time and O(1) space where n is te number of nodes
const isUnivalueList = (head) => {
  const initialVal = head.val;
  let current = head;

  while(current !== null) {
    if (current.val !== initialVal) return false;
    current = current.next;
  }

  return true;
};

module.exports = {
  isUnivalueList,
};

// Write a function, isUnivalueList, that takes in the head of a linked list as an argument. The function should return a boolean indicating whether or not the linked list contains exactly one unique value.

// You may assume that the input list is non-empty.

//   z  