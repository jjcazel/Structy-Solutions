// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

//O(n) time and O(n) time
const breadthFirstValues = (root) => {
  if (root === null) return [];
  const queue = [ root ];
  const bfsVals = [];

  while (queue.length > 0) {
    const currNode = queue.shift();
    bfsVals.push(currNode.val);
    if (currNode.left) queue.push(currNode.left);
    if (currNode.right) queue.push(currNode.right);
  }

  return bfsVals;
};

module.exports = {
  breadthFirstValues,
};
