// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

//O(n) time and O(n) space
const bottomRightValue = (root) => {
  const queue = [ root ];
  let lastVal = root.val;

  while (queue.length > 0) {
    const currNode = queue.shift();
    lastVal = currNode.val
    if (currNode.right) queue.push(currNode.right);
    if (currNode.left) queue.push(currNode.left);
  }
  
  return lastVal;
};

module.exports = {
  bottomRightValue,
};

//       3
//    /    \
//   11     10
//  / \      \
// 4   -2     1

// lastVal = 1
// [1 ]