// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// O(n) time and O(1) space where n is the number of nodes
const howHigh = (node) => {
  if (node === null) return 0;
  if (node.right === null && node.left === null) return 0;
  const leftSum = 1 + howHigh(node.left);
  const rightSum = 1 + howHigh(node.right);
  return Math.max(leftSum, rightSum);
};

module.exports = {
  howHigh,
};


//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

// howHigh(a); // -> 2