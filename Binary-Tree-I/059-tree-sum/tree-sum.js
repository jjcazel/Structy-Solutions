// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const treeSum = (root) => {
  if (root === null) return 0;
  const queue = [ root ];
  let sum = 0;

  while (queue.length > 0) {
    const currNode = queue.shift();
    sum += currNode.val;
    if (currNode.left) queue.push(currNode.left);
    if (currNode.right) queue.push(currNode.right);
  }

  return sum;
};

module.exports = {
  treeSum,
};

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

// queue = [ 4, -2 ]
// currNode = 4
// sum = 18