// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

//O(n) time and O(1) space where n is the num of nodes
const reverseList = (head) => {
  let prev = null;
  let current = head;

  while (current !== null) {
    let tempNext = current.next;
    current.next = prev;
    prev = current;
    current = tempNext;
  }

  return prev;
};

module.exports = {
  reverseList,
};

// Write a function, reverseList, that takes in the head of a linked list as an argument. The function should reverse the order of the nodes in the linked list in-place and return the new head of the reversed linked list.

// f -> e -> d -> c -> b -> a -> null

// null ->  a  ->  b  ->  c  ->  d  ->  e  ->  f  ->  null
                                            //  prev   curr  temp


// f -> e -> d -> c -> b -> a -> null 