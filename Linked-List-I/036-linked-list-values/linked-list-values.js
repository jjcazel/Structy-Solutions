// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// O(n) time and O(n) space
const linkedListValues = (head) => {
  const vals = [];
  let curr = head;

  while (curr) {
    vals.push(curr.val);
    curr = curr.next;
  }

  return vals;
};

module.exports = {
  linkedListValues,
};
