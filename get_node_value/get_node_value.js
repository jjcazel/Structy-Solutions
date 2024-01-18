
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }
​
//
const getNodeValue = (head, index) => {
  let count = 0;
  
  while (head) {
    if (count === index) {
      return head.val;
    }
    head = head.next;
    count++;
  }
  
  return null;
};
​
​
​
​
​
​
​
​
​
​
​
​
​
​
​
​
​
// O(n) time and O(1) space - 10.24
// const getNodeValue = (head, index) => {
//   let count = 0;
//   while (count <= index && head) {
//     if (count === index) {
//       return head.val;
​