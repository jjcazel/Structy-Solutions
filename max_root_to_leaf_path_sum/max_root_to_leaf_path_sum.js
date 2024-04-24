// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }


const maxPathSum = (root) => {
  if (!root) return -Infinity;
  if (!root.right && !root.left) return root.val;
  return root.val + Math.max(maxPathSum(root.left), maxPathSum(root.right));
};








































// recursive
// const maxPathSum = (root) => {
//   if (!root) return -Infinity;
//   if (!root.left && !root.right) return root.val;
  
//   return Math.max(maxPathSum(root.left), maxPathSum(root.right)) + root.val;
// };






module.exports = {
  maxPathSum
};