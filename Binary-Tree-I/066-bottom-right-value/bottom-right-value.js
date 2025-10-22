// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

//O(n) time and O(n) space where n is the number of nodes
const bottomRightValue = (root) => {
  let lastVal = root.val;
  const queue = [ root ];

  while (queue.length > 0) {
    const currNode = queue.shift();
    lastVal = currNode.val;
    if (currNode.left) queue.push(currNode.left);
    if (currNode.right) queue.push(currNode.right);
  }

  return lastVal;
};

module.exports = {
  bottomRightValue,
};

//       3


// lastVal = 3
// queue [ 3 ]