// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }


//O(n) time and O(n) space where n is the num of nodes
const pathFinder = (root, target) => {
  const pathToTarget = pathFinderHelper(root, target);
  if (pathToTarget) {
    return pathToTarget.reverse();
  } else {
    return null;
  }
};


const pathFinderHelper = (root, target) => {
  if (!root) return null;
  if (root.val === target) return [ root.val ];
  const rightSubPath = pathFinderHelper(root.left, target);
  const leftSubPath = pathFinderHelper(root.right, target);


  if (leftSubPath) {
    leftSubPath.push(root.val);
    return leftSubPath;
  }
  if (rightSubPath) {
    rightSubPath.push(root.val);
    return rightSubPath;
  } 
  
  return null;
}


module.exports = {
  pathFinder,
};

