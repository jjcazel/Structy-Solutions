
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }
​
// O(n) time and O(n) space where n is the number of nodes
const linkedListValues = (head) => {
  const nodeValues = [];
  
  while (head !== null) {
    nodeValues.push(head.val);
    head = head.next;
  }
  
  return nodeValues;
};
​
// creating an output array
// loop through the linked list until we get to the null node
// push each value to the output array
// make sure to set the current head to the next node
// return the array once the loop terminates
​
​
module.exports = {
  linkedListValues,
};
​
};