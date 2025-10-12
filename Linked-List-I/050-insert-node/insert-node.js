class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// O(n) time and O(n) space where n is the number of nodes
const insertNode = (head, value, index) => {
  if (index === 0) {
    const newNode = new Node(value);
    newNode.next = head;
    return newNode;
  }
  if (head === null) return null;
  head.next = insertNode(head.next, value, index - 1);
  return head;
};

module.exports = {
  insertNode,
};
