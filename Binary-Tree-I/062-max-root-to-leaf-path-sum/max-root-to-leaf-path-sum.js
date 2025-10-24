// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

//O(n) time and O(n) space
const maxPathSum = (root) => {
  if (root === null) return -Infinity;
  if (root.right === null && root.left === null) return root.val;
  return root.val + Math.max(maxPathSum(root.right), maxPathSum(root.left));
};

module.exports = {
  maxPathSum,
};

//        5
//     /    \
//    11    54
//  /   \
// 20   15
//      / \
//     1  3