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
  if (root.left === null && root.right === null) return root.val;
  return root.val + Math.max(maxPathSum(root.left), maxPathSum(root.right));
};

module.exports = {
  maxPathSum,
};


//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

// 3 + max(maxPathSum(11), maxPathSum(4))
// 11 + max(recursive calls)

// maxPathSum(a); // -> 18