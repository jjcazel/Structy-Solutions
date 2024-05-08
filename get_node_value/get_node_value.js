const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");


a.next = b;
b.next = c;
c.next = d;


// a -> b -> c -> d


getNodeValue(a, 2); // 'c'
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");


a.next = b;
b.next = c;
c.next = d;


// a -> b -> c -> d


getNodeValue(a, 3); // 'd'
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");


a.next = b;
b.next = c;
c.next = d;


// a -> b -> c -> d


getNodeValue(a, 7); // null
const node1 = new Node("banana");
const node2 = new Node("mango");


node1.next = node2;


// banana -> mango


getNodeValue(node1, 0); // 'banana'
const node1 = new Node("banana");
const node2 = new Node("mango");


node1.next = node2;


// banana -> mango


getNodeValue(node1, 1); // 'mango'
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }


// O(n) time and O(n) space, n = number of nodes


function getNodeValue(head, index) {
  if (!head) return null;
  if (index === 0) return head.val;
  return getNodeValue(head.next, index - 1);
}




// O(n) time and O(1) space, n = number of nodes
// const getNodeValue = (head, index) => {
//   let count = 0;
  
//   while (head) {
//     if (count === index) {
//       return head.val;
//     }
//     head = head.next;
//     count++;
//   }
  
//   return  null;
// };


module.exports = {