// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }


// O(n) time and O(n) space where n is the number of nodes
const pathFinder = (root, target) => {
  const result = pathFinderHelper(root, target);
  return result ? result.reverse() : null;
}

const pathFinderHelper = (root, target) => {
  if (root === null) return null;
  if (root.val === target) return [ root.val ];
  
  const leftVals = pathFinderHelper(root.left, target);
  if (leftVals) {
    leftVals.push(root.val);
    return leftVals;
  }
  
  const rightVals = pathFinderHelper(root.right, target);
  if (rightVals) {
    rightVals.push(root.val);
    return rightVals;
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

// base cases: if root is your target return the root in an array
// if root is null return null
// recursive calls to left child and right child
// 
// return null

// root = [ a, b, e ] 
