// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const depthFirstValues = (root) => {
  if (!root) return [];
  const stack = [ root ];
  const dfsVals = [];
  
  while (stack.length) {
    const currNode = stack.pop();
    dfsVals.push(currNode.val);
    if (currNode.right) stack.push(currNode.right);
    if (currNode.left) stack.push(currNode.left);
  }

  return dfsVals;
};

module.exports = {
  depthFirstValues,
};
