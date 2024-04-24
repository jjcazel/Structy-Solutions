// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

//O(n) time and O(n) space where n is the number of nodes
const maxPathSum = (root) => {
  if (!root) return -Infinity;
  if (!root.left && !root.right) return root.val;
  return root.val + Math.max(maxPathSum(root.left), maxPathSum(root.right));
};


module.exports = {
  maxPathSum,
};

