// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

//O(n) time and O(n) space 
const zipperLists = (head1, head2) => {
  if (head1 === null) return head2;
  if (head2 === null) return head1;

  const next1 = head1.next;
  const next2 = head2.next;
  head1.next = head2;
  head2.next = zipperLists(next1, next2);
  return head1;
};

module.exports = {
  zipperLists,
};

// a -> b -> c

// x -> y -> z

// zipperLists(a, x);
// a -> x -> zipperLists(b, y)
// a -> x -> b -> y -> zipperLists(c, z)
// a -> x -> b -> y -> c -> z -> zipperLists(null, null);
// a -> x -> b -> y -> c -> z -> null