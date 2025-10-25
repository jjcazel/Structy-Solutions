// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// O(n) time and O(n) space
const treeValueCount = (root, target) => {
  if (root === null) return 0;
  const match = root.val === target ? 1 : 0;
  return match + treeValueCount(root.left, target) + treeValueCount(root.right, target);
};

module.exports = {
  treeValueCount,
};

//      12
//    /   \
//   6     6
//  / \     \
// 4   6     12

// count = 2
// treeValueCount(a,  12); // -> 2