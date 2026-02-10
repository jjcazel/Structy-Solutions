// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// O(n) time and O(n) space where N is the number of nodes
const treeIncludes = (root, target) => {
  if (root === null) return false;
  const stack = [ root ];

  while (stack.length) {
    const currNode = stack.pop();
    if (currNode.val === target) return true;
    if (currNode.left) stack.push(currNode.left);
    if (currNode.right) stack.push(currNode.right);
  }

  return false;
};

module.exports = {
  treeIncludes,
};

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

// stack = [ {val: e, left: {...}, right: {...} } ], currNode.val = e