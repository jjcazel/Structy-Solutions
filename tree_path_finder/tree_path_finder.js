// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }


//O(n) time and O(n) space
const pathFinder = (root, target) => {
  // DFS recursive
  // base case: if root is null return empty array
  // base case: if the root's value equals target return the root's value in an array
  // recursive call: return recursive calls to the left and right children spread in an array with the root's value
  if (!root) return null;
  if (root.val === target) return [ root.val ];
  const leftPath = pathFinder(root.left, target);
  const rightPath = pathFinder(root.right, target);
  if (leftPath) {
    return [root.val, ...leftPath];
  }
  if (rightPath) {
    return [root.val, ...rightPath];
  }
  return null;
};


module.exports = {
  pathFinder,
};

