// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// O(n) time and O(n^2) space
const leafList = (root) => {
  if (root === null) return [];
  if (root.right === null && root.left === null) return [ root.val ];

  return [ ...leafList(root.left), ...leafList(root.right) ];
};

module.exports = {
  leafList,
};
