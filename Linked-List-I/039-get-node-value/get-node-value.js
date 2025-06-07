// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const getNodeValue = (head, index) => {
  let nodeVal = null;
  while (head && index >= 0) {
    nodeVal = head.val;
    head = head.next;
    index--;
  }

  return index > 0 ? null : nodeVal;
};

module.exports = {
  getNodeValue,
};
