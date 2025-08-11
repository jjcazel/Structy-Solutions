// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

//O(n) time and O(n) time
const breadthFirstValues = (root) => {
  if (root === null) return [];
  const queue = [ root ]; // [ c, d, e, f ]
  const bfsNodes = []; // [ a, b ]

  while (queue.length) {
    const currNode = queue.shift(); // b // counting this as O(1) constant time
    bfsNodes.push(currNode.val);
    if (currNode.left) queue.push(currNode.left);
    if (currNode.right) queue.push(currNode.right);
  }

  return bfsNodes;
};

module.exports = {
  breadthFirstValues,
};
