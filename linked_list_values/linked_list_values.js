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


//O(n) time and O(n) space
const linkedListValues = (head) => {
  const listVals = [];
  linkedListValuesHelper(head, listVals);
  return listVals;
};


const linkedListValuesHelper = (head, listVals) => {
  if (!head) return [];
  listVals.push(head.val);
  linkedListValuesHelper(head.next, listVals);
}


module.exports = {
  linkedListValues,
};

