class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// O(min(m, n)) time and O(1) space
const mergeLists = (head1, head2) => {
  const dummyHead = new Node(null);
    let tail = dummyHead;
    let curr1 = head1;
    let curr2 = head2;

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

    if (curr1 !== null) tail.next = curr1;
    if (curr2 !== null) tail.next = curr2;

    return dummyHead.next;
          
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
//                      curr2

// dummyHead = null -> 5 -> 6 -> 7 -> 8 -> 9 -> 10 -> 12 -> 20 -> 25 -> 28
//                                                                     tail

// 5 -> 6 -> 7 -> 8 -> 9 -> 10 -> 12 -> 20 -> 25 -> 28 
