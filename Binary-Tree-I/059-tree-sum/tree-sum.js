// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

//O(n) time and O(n) space where n is the number of nodes
const treeSum = (root) => {
  if (root === null) return 0;
  let sum = 0;
  const queue = [ root ];

  while (queue.length > 0) {
    const currNode = queue.shift();
    sum += currNode.val;
    if (currNode.right) queue.push(currNode.right);
    if (currNode.left) queue.push(currNode.left);
  }

  return sum;
};

module.exports = {
  treeSum,
};

// Write a function, treeSum, that takes in the root of a binary tree that contains number values. The function should return the total sum of all values in the tree.

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

//treeSum(a); // -> 21