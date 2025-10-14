// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// O(n) time and O(1) space where n is the number of nodes
const zipperLists = (head1, head2) => {
  let curr1 = head1.next;
  let curr2 = head2;
  let tail = head1;
  let count = 0;

  while (curr1 !== null && curr2 !== null) {
    if (count % 2 === 0) {
      tail.next = curr2;
      curr2 = curr2.next;
    } else {
      tail.next = curr1;
      curr1 = curr1.next;
    }
    tail = tail.next;
    count += 1;
  }

  if (curr1) tail.next = curr1;
  if (curr2) tail.next = curr2;

  return head1;
};

module.exports = {
  zipperLists,
};

//  a  ->  b  ->  c
                curr1
//  x  ->  y 
             curr2
//  a  ->  x -> b -> y -> c
                    tail

// count = 3: even is curr2 and odd is curr1