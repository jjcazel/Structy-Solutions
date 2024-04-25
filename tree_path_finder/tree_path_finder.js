// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

//O(n) time and O(n) space
function pathFinder(root, target) {
  const pathToTarget = pathFinderHelper(root, target);
  if (pathToTarget) {
    return pathToTarget.reverse();
  } else {
    return null;
  }
}

const pathFinderHelper = (root, target) => {
  if (!root) return null;
  if (root.val === target) return [ root.val ];
  const leftPath = pathFinderHelper(root.left, target);
  const rightPath = pathFinderHelper(root.right, target);
  if (leftPath) {
    leftPath.push(root.val);
    return leftPath;
  }
  if (rightPath) {
    rightPath.push(root.val);
    return rightPath;
  }
  return null;
};


module.exports = {
  pathFinder,
};

