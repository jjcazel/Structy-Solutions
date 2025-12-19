// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// O(n^2) time and O(n) space where n is the number of nodes
const pathFinder = (root, target) => {
  const path = pathFinderHelper(root, target);
  if (path === null) {
    return null;
  } else {
    return path.reverse();
  }
}
const pathFinderHelper = (root, target) => {
  if (root === null) return null;
  if (root.val === target) return [ root.val ];
  
  const rightVals = pathFinderHelper(root.right, target);
  if (rightVals) {
    rightVals.push(root.val);
    return rightVals;
  }
  
  const leftVals = pathFinderHelper(root.left, target);
  if (leftVals) {
    leftVals.push(root.val);
    return leftVals;
  }

  return null;
};

module.exports = {
  pathFinder,
};



