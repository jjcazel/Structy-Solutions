// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.left = null;
//   }
// }

// O(n) time and O(n) space where n is the number of nodes
const maxPathSum = (root) => {
  const stack = [ [root, 0] ];
  let maxSum = -Infinity;

  while (stack.length > 0) {
    const [currNode, currSum] = stack.pop();
    currSum += currNode.val;
    
    if (currNode.right) stack.push([currNode.right, currSum]);
    if (currNode.left) stack.push([currNode.left, currSum]);
    if (currNode.left === null && currNode.right === null) {
      maxSum = Math.max(maxSum, currSum);
    }
  }

  return maxSum;
};

module.exports = {
  maxPathSum,
};

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

// maxPathSum(a); // -> 18

// stack = [  [11, 3], [4, 3], [1, 7], [4, 14], [-2, 14] ]
//currNode = 11
//currSum = 14
//maxSum = 14