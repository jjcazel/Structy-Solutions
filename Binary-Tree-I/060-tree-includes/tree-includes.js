// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

//O(n) time and O(n) space where n is the number of nodes
const treeIncludes = (root, target) => {
  if (root === null) return false;
  const stack = [ root ];

  while (stack.length > 0) {
    const currNode = stack.pop();
    if (currNode.val === target) return true;
    if (currNode.right) stack.push(currNode.right);
    if (currNode.left) stack.push(currNode.left);
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