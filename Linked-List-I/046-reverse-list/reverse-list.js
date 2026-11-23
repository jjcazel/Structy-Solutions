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

  while (current !== null) {
    let tempNext = current.next;
    current.next = prev;
    prev = current;
    current = tempNext;
  }

  return prev;
};


module.exports = {
  reverseList,
};
