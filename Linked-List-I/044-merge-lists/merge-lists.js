class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// O(min(m, n)) time and O(1) space
const mergeLists = (head1, head2) => {
  let current1 = head1;
  let current2 = head2;
  let tail = new Node(null);

  while (current1 !== null && current2 !== null) {
    if (current1.val < current2.val) {
      tail.next = current1;
      current1 = current1.next;
    } else {
      tail.next = current2;
      current2 = current2.next;
    }
    tail = tail.next;
  }

  if (current1) tail.next = current1;
  if (current2) tail.next = current2;

  return tail.next;
}

module.exports = {
  mergeLists,
};

// Write a function, mergeLists, that takes in the head of two sorted linked lists as arguments. The function should merge the two lists together into single sorted linked list. The function should return the head of the merged linked list.

// Do this in-place, by mutating the original Nodes.

// You may assume that both input lists are non-empty and contain increasing sorted numbers.

//   5  ->  7  ->  10  ->  12  ->  20  ->  28
//                                       curr1
//   6  ->  8  ->  9  ->  25
//                          curr2

// 5 -> 6 -> 7 -> 8 -> 9 -> 10 -> 12 -> 20 -> 25 -> 28 
