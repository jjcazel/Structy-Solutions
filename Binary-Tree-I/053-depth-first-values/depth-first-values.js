// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

//O(n) time and O(n) space
const depthFirstValues = (root) => {
  if (root === null) return [];
  const rightValues = depthFirstValues(root.right);
  const leftValues = depthFirstValues(root.left);
  return [ root.val, ...leftValues, ...rightValues ];
};

module.exports = {
  depthFirstValues,
};
