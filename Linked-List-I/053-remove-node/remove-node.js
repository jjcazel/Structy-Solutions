class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

//O(n) time and O(1) space
const removeNode = (head, targetVal) => {
  let current = head;
  let prev = null;

  if (head.val === targetVal) return head.next;

  while (current !== null) {
    if (current.val === targetVal) {
      prev.next = current?.next;
      break;
    }
    prev = current;
    current = current.next;
  }

  return head;
};

module.exports = {
  removeNode,
};
