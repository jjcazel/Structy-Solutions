// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// O(n) time and O(n) space
const zipperLists = (head1, head2) => {
  let current1 = head1.next;
  let current2 = head2;
  let tail = head1;

  while (current1 !== null && current2 !== null) {
    tail.next = current2;
    current2 = current2.next;
    tail = tail.next;
    tail.next = current1;
    current1 = current1.next;
    tail = tail.next;
  }

  if (current1) tail.next = current1;
  if (current2) tail.next = current2;

  return head1;
};

module.exports = {
  zipperLists,
};
