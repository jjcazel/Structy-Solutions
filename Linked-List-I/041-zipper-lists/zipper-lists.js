// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

//O(ab) time and O(1) space
const zipperLists = (head1, head2) => {
  let current1 = head1.next;
  let current2 = head2;
  let count = 1;
  let zipperList = head1;

  while (current1 && current2) {
    if (count % 2 === 0) {
      zipperList.next = current1;
      current1 = current1.next;
    } else {
      zipperList.next = current2;
      current2 = current2.next;
    }

    zipperList = zipperList.next;
    count++;
  }

  if (current1) zipperList.next = current1;
  if (current2) zipperList.next = current2;

  return head1;
    
};

// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");
// const e = new Node("e");
// const f = new Node("f");
// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
// e.next = f;
// // a -> b -> c -> d -> e -> f

// const x = new Node("x");
// const y = new Node("y");
// const z = new Node("z");
// x.next = y;
// y.next = z;
// // x -> y -> z

// ;

// console.log(zipperLists(a, x));

// module.exports = {
//   zipperLists,
// };
