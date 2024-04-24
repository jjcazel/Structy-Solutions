// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }


//O(n) time and O(n) space where n is the number of nodes
const pathFinder = (root, target) => {
  const pathArray = pathFinderHelper(root, target);
  if (pathArray) {
    return pathArray.reverse();
  }
  return null;
}


//O(n) time and O(n) space where n is the number of nodes
const pathFinderHelper = (root, target, array) => {
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

