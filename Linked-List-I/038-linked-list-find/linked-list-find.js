// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const linkedListFind = (head, target) => {
  while (head) {
    if (head.val === target) return true;
    head = head.next;
  }
  return false;
};

module.exports = {
  linkedListFind,
};
