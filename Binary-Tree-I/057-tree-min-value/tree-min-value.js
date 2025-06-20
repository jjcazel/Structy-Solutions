// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

//O(n) time and O(n) space - look at every node and store them on the stack
// const treeMinValue = (root) => {
//   const stack = [ root ];
//   let minValue = Infinity;

//   while (stack.length) {
//     const currNode = stack.pop();
//     if (currNode.val < minValue) minValue = currNode.val;
//     if (currNode.left) stack.push(currNode.left);
//     if (currNode.right) stack.push(currNode.right);
//   }

//   return minValue;
// };

// O(n) time and O(n) space
const treeMinValue = (root) => {
  if (!root) return Infinity;
  return Math.min(root.val, treeMinValue(root.left), treeMinValue(root.right));
};

module.exports = {
  treeMinValue,
};
