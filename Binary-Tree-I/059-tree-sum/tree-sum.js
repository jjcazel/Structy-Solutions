// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

//O(n) time and O(n) space
const treeSum = (root) => {
  if (root === null) return 0;

  const rightVals = treeSum(root.right);
  const leftVals = treeSum(root.left);
  return root.val + rightVals + leftVals;
};

module.exports = {
  treeSum,
};

//       3
//    /    \
//  11 (13) 4  (5)
//  / \    / \
// 4   -2 n   1

