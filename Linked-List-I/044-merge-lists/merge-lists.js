class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// O(n) time and O(1) space where n is the number of nodes
const mergeLists = (head1, head2) => {
  let curr1 = head1;
  let curr2 = head2;
  const dummyNode = new Node(null);
  let tail = dummyNode;

  while (curr1 !== null && curr2 !== null) {
    if (curr1.val < curr2.val) {
      tail.next = curr1;
      curr1 = curr1.next;
    } else {
      tail.next = curr2;
      curr2 = curr2.next;
    }
    tail = tail.next;
  }

  if (curr1) tail.next = curr1;
  if (curr2) tail.next = curr2;

  return dummyNode.next;
};

module.exports = {
  mergeLists,
};

// 5 -> 7 -> 10 -> 12 -> 20 -> 28
//                           curr1
// 6 -> 8 -> 9 -> 25
//                  curr2

//   null ->  5 -> 6 -> 7 -> 8 -> 9 -> 10 -> 12 -> 20 -> 25 -> 28
//dummyNode                                             tail
