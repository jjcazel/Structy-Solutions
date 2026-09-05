// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

//O(n) time and O(n) space
const getNodeValue = (head, index, count = 0) => {
  if (head === null) return null;
  if (count === index) return head.val;
  return getNodeValue(head.next, index, count + 1);
};

module.exports = {
  getNodeValue,
};
