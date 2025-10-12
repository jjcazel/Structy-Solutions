// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// O(n) time and O(n) space where n is the number of nodes
const depthFirstValues = (root) => {
  if(root === null) return [];
  const stack = [ root ];
  const dfsVals = [];

  while(stack.length !== 0) {
    const currNode = stack.pop();
    dfsVals.push(currNode.val);
    if(currNode.right) stack.push(currNode.right);
    if(currNode.left) stack.push(currNode.left);
  }

  return dfsVals;
};

module.exports = {
  depthFirstValues,
};


// Write a function, depthFirstValues, that takes in the root of a binary tree. The function should return an array containing all values of the tree in depth-first order.

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f



