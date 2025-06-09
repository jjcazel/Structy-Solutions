// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const treeIncludes = (root, target) => {
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
