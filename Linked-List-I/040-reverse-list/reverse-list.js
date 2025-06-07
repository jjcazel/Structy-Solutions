// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

//O(n) time and O(1) space
const reverseList = (head) => {
  let current = head;
  let prev = null;

  while (current) {
    let oldNext = current.next;
    current.next = prev;
    prev = current;
    current = oldNext;
  }

  return prev;
};

module.exports = {
  reverseList,
};
