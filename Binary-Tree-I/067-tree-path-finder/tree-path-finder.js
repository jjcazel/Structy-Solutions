// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

//O(n) time and O(n) space
const pathFinder = (root, target) => {
  const path = findPath(root, target);
  if (path == null) {
    return null 
  } else {
    return path.reverse();
  } 
};

const findPath = (root, target) => {
  if (root === null) return null;
  if (root.val === target) return [ root.val ];

  const leftPath = findPath(root.left, target);
  if (leftPath) {
    leftPath.push(root.val);
    return leftPath;
  }

  const rightPath = findPath(root.right, target);
  if (rightPath) {
    rightPath.push(root.val);
    return rightPath;
  }

  return null;
}

module.exports = {
  pathFinder,
};
