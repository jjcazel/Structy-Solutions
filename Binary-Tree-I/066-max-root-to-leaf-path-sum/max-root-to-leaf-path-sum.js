// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// O(n) time where n is the count of the nodes and O(n) space where n is the height of the tree
const maxPathSum = (root) => {
  if (root === null) return -Infinity;
  if (root.right === null && root.left === null) return root.val;

  const leftPathSum = maxPathSum(root.left);
  const rightPathSum = maxPathSum(root.right);

  const maxPath = Math.max(leftPathSum, rightPathSum);

  return root.val + maxPath;
};

module.exports = {
  maxPathSum,
};
