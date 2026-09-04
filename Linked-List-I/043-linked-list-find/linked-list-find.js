// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

//O(n) time and O(1) space where n is the number of nodes in the list
const linkedListFind = (head, target) => {
  let current = head;

  while (current !== null) {
    if (current.val === target) return true;
    current = current.next;
  }

  return false;
};

module.exports = {
  linkedListFind,
};
