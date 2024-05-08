
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }


//O(n) time and O(n) space
const reverseList = (head, prev = null) => {
  if (!head) return prev;
  let tempNext = head.next;
  head.next = prev;
  prev = head;
  head = tempNext;
  return reverseList(head, prev);
};


module.exports = {
  reverseList,
};

