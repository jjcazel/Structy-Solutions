// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// O(n) time and O(n) space where n is the number of nodes
const breadthFirstValues = (root) => {
  const queue = [ root ];
  const bfsVals = [];

  while (queue.length > 0) {
    const currNode = queue.shift(); // assume this is an O(1) operation
    bfsVals.push(currNode.val);
    if (currNode.left) queue.push(currNode.left);
    if (currNode.right) queue.push(currNode.right);
  }

  return bfsVals;
};

module.exports = {
  breadthFirstValues,
};

// Write a function, breadthFirstValues, that takes in the root of a binary tree. The function should return an array containing all values of the tree in breadth-first order.

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

// breadthFirstValues(a); 
//    -> ['a', 'b', 'c', 'd', 'e', 'f']