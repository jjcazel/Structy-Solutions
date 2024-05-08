const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");


a.next = b;
b.next = c;
c.next = d;


// a -> b -> c -> d


linkedListValues(a); // -> [ 'a', 'b', 'c', 'd' ]
const x = new Node("x");
const y = new Node("y");


x.next = y;


// x -> y


linkedListValues(x); // -> [ 'x', 'y' ]
const q = new Node("q");


// q


linkedListValues(q); // -> [ 'q' ]
linkedListValues(null); // -> [ ]
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }


// O(n) time and O(n) space where n is the number of nodes
const linkedListValues = (head) => {
  const nodeValues = [];
  _linkedListValues(head, nodeValues);
  return nodeValues;
};


function _linkedListValues(head, nodeValues) {
  if (head === null) return;
  nodeValues.push(head.val);
  _linkedListValues(head.next, nodeValues);
}


// const linkedListValues = (head) => {
//   const nodeValues = [];
//   let currentNode = head;
  
//   while (currentNode !== null) {
//     nodeValues.push(currentNode.val);
//     currentNode = currentNode.next;
//   }
  
//   return nodeValues;
// };




// creating an output array
// loop through the linked list until we get to the null node
// push each value to the output array
// make sure to set the current head to the next node
// return the array once the loop terminates




module.exports = {
  linkedListValues,
};

