// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// O(n) time and O(n) space
const reverseList = (head, prev = null) => {
  if (head === null) return prev;
  let next = head.next;
  head.next = prev;
  return reverseList(next, head);
};

module.exports = {
  reverseList,
};
