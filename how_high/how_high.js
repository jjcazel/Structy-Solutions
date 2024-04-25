// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }


//O(n) time and O(n) sapce where n is the number of nodes
const howHigh = (node) => {
  // base case: if node is null return -1
  // return the max between the recursive calls of the left and right children + 1
  if (!node) return -1;
  return Math.max(howHigh(node.left), howHigh(node.right)) + 1;
};


module.exports = {
  howHigh,
};

