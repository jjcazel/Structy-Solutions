// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

//O(n) time and O(1) space
const getNodeValue = (head, index) => {
  let count = 0;
  let current = head;

  while (current !== null) {
    if (count === index) return current.val;
    count++;
    current = current.next;
  }

  return null;
};

module.exports = {
  getNodeValue,
};
