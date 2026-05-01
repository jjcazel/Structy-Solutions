// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// O(n^2) time and O(n) space
const pathFinder = (root, target) => {
  if (root === null) return null;
  if (root.val === target) return [ root.val ];

  const leftSubTree = pathFinder(root.left, target);
  const rightSubTree = pathFinder(root.right, target);

  if (leftSubTree) {
    return [root.val, ...leftSubTree];
  }
  if (rightSubTree) {
    return [root.val, ...rightSubTree];
  }
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

// two base cases: if root is target return the target in an array
// if root is null return null
// recursive step: spread the left tree and the right tree into an array if it exists
// this works because if we don't find the target we return null and don't add that subtree to the result