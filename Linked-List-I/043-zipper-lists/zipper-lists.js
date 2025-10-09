// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// O(min(m, n) time and O(n) space where n is number of nodes
const zipperLists = (head1, head2) => {
  if (head1 === null) return head2;
  if (head2 === null) return head1;

  const temp1Next = head1.next;
  head1.next = head2;
  const temp2Next = head2.next;
  head2.next = zipperLists(temp1Next, temp2Next);

  return head1;
};

module.exports = {
  zipperLists,
};

// Write a function, zipperLists, that takes in the head of two linked lists as arguments. The function should zipper the two lists together into single linked list by alternating nodes. If one of the linked lists is longer than the other, the resulting list should terminate with the remaining nodes. The function should return the head of the zippered linked list.

// Do this in-place, by mutating the original Nodes.

// You may assume that both input lists are non-empty.

// head1 =  a  ->  b  ->  c -> null  
// head2 = x  ->  y  ->  z -> null

//  a -> zipperList(x, b);
//  
                 