const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");


a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;


// a -> b -> c -> d -> e -> f


reverseList(a); // f -> e -> d -> c -> b -> a
const x = new Node("x");
const y = new Node("y");


x.next = y;


// x -> y


reverseList(x); // y -> x
const p = new Node("p");


// p


reverseList(p); // p
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }


//O(n) time and O(1) space
const reverseList = (head, prev = null) => {
  if (!head) return prev;
  let tempNext = head.next;
  head.next = prev;
  prev = head;
  head = tempNext;
  return reverseList(head, prev);
};


module.exports = {
  reverseList,
};

