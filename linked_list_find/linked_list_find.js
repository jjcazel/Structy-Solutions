const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");


a.next = b;
b.next = c;
c.next = d;


// a -> b -> c -> d


linkedListFind(a, "c"); // true
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");


a.next = b;
b.next = c;
c.next = d;


// a -> b -> c -> d


linkedListFind(a, "d"); // true
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");


a.next = b;
b.next = c;
c.next = d;


// a -> b -> c -> d


linkedListFind(a, "q"); // false
const node1 = new Node("jason");
const node2 = new Node("leneli");


node1.next = node2;


// jason -> leneli


linkedListFind(node1, "jason"); // true
const node1 = new Node(42);


// 42


linkedListFind(node1, 42); // true
const node1 = new Node(42);


// 42


linkedListFind(node1, 100); // false
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }


//O(n) time and O(n) space, n = number of nodes
function linkedListFind(head, target) {
  if (!head) return false;
  if (head.val === target) {
    return true;
  }
  return linkedListFind(head.next, target);
}




//O(n) time and O(1) space, n = number of nodes
// const linkedListFind = (head, target) => {
//   let current = head;
  
//   while (current) {
//     if (current.val === target) {
//       return true;
//     }
//     current = current.next;
//   }
  
//   return false;
// };


// loop through the head until I get to the null node
// at each node check if the target matches the current value
// if so return true, if not keep incrementing
// if you exite the loop w/o finding the target return false




module.exports = {
  linkedListFind,
};

