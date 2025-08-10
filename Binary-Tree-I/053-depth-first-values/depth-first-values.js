// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

//O(n) time and O(n) space
const depthFirstValues = (root) => {
  if (root === null) return [];
  const dfsOrderNodes = [];
  const stack = [root];

  while (stack.length) {
    const currNode = stack.pop();
    dfsOrderNodes.push(currNode.val);
    if (currNode.right) stack.push(currNode.right);
    if (currNode.left) stack.push(currNode.left);
  } 

  return dfsOrderNodes;
};

module.exports = {
  depthFirstValues,
};
