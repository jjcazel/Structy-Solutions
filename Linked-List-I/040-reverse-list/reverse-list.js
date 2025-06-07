// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

//O(n) time and O(n) space
const reverseList = (head, prev = null) => {
  let (head === null) return prev;
  let oldNext = head.next;
  head.next = prev;
  return reverseList(oldNext, head);
};

module.exports = {
  reverseList,
};
