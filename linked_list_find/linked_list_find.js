
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }
​
//O(n) time and O(n) space, n = number of nodes
const linkedListFind = (head, target) => {
  let current = head;
  
  while (current) {
    if (current.val === target) {
      return true;
    }
    current = current.next;
  }
  
  return false;
};
​
// loop through the head until I get to the null node
// at each node check if the target matches the current value
// if so return true, if not keep incrementing
// if you exite the loop w/o finding the target return false
​
​
module.exports = {
  linkedListFind,
};
​
​