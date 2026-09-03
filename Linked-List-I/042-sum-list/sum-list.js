// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// O(n) time and O(n) space
const sumList = (head) => {
  if (head === null) return 0;
  return head.val + sumList(head.next);
};

module.exports = {
  sumList,
};
