// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// O(n) time and O(n) space where n is the number of nodes
const treeMinValue = (root) => {
  const minValue = Infinity;
  const stack = [ root ];

  while (stack.length > 0) {
    const currNode = stack.pop();
    minValue = Math.min(minValue, currNode.val);
    if (currNode.right) stack.push(currNode.right);
    if (currNode.left) stack.push(currNode.left);
  }

  return minValue;
};

module.exports = {
  treeMinValue,
};
