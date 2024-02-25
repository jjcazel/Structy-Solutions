
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }
​
// O(n) time and O(1) space, n = number of nodes
const getNodeValue = (head, index) => {
  let count = 0;
  
  while (head) {
    if (count === index) {
      return head.val;
    }
    head = head.next;
    count++;
  }
  
  return  null;
};
​
module.exports = {
  getNodeValue,
};
​
      return head.val;