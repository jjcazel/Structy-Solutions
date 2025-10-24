// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

//O(n) time and O(n) space
const pathFinder = (root, target) => {
  if (root === null) return null;
  if (root.val === target) return [root.val];
  const rightPath = pathFinder(root.right, target);
  const leftPath = pathFinder(root.left, target);
  if (rightPath) return [ root.val, ...rightPath ];
  if (leftPath) return [ root.val, ...leftPath ];
  return null;
};

module.exports = {
  pathFinder,
};

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

// a