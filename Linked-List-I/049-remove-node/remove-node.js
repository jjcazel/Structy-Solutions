// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

//O(n) time and O(1) space
const removeNode = (head, targetVal) => {
  let current = head;
  let prev = null;

  while (current !== null) {
    if (current.val === targetVal) {
      console.log('prev', prev, 'current', current);
      if (prev === null) {
        head = head.next;
      } else {
        prev.next = current.next;
      }
      return head;
    }
    prev = current;
    current = current.next;
  }
  return head;
};

module.exports = {
  removeNode,
};

// Write a function, removeNode, that takes in the head of a linked list and a target value as arguments. The function should delete the node containing the target value from the linked list and return the head of the resulting linked list. If the target appears multiple times in the linked list, only remove the first instance of the target in the list.

// Do this in-place.

// You may assume that the input list is non-empty.

// You may assume that the input list contains the target.

//           a -> b -> c -> null
//         prev curr
// removeNode(a, 'c')
// a -> b -> d -> e -> f