// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// O(n) time and O(1) space
const isUnivalueList = (head) => {
  let current = head;
  const uniqueVal = head.val;

  while (current !== null) {
    if (current.val !== uniqueVal) return false;
    current = current.next;
  }

  return true;
};

module.exports = {
  isUnivalueList,
};

// Write a function, isUnivalueList, that takes in the head of a linked list as an argument. The function should return a boolean indicating whether or not the linked list contains exactly one unique value.

// You may assume that the input list is non-empty.

// a -> a -> a = true
// a -> b -> c = false
