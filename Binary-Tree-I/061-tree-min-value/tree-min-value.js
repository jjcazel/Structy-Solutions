// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// O(n) time and O(n) space where n is the number of nodes
const treeMinValue = (root) => {
  if (root === null) return Infinity;
  return Math.min(root.val, treeMinValue(root.left), treeMinValue(root.right));
};

module.exports = {
  treeMinValue,
};

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1