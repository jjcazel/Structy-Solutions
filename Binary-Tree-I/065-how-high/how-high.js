// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

//O(n) time and O(n) space where n is the number of nodes
const howHigh = (node) => {
  if (node === null) return -1;
  let maxEdgeCount = 0;
  const stack = [ [node, 0] ];

  while (stack.length > 0) {
    const [ currNode, currEdgeCount ] = stack.pop();
    maxEdgeCount = Math.max(currEdgeCount, maxEdgeCount);
    if (currNode.right !== null) stack.push([ currNode.right, currEdgeCount + 1 ]);
    if (currNode.left !== null) stack.push([ currNode.left, currEdgeCount + 1 ]);
  }

  return maxEdgeCount;
};

module.exports = {
  howHigh,
};

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

// maxEdgeCount = 0
// [currNode, currCount]