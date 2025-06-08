// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const breadthFirstValues = (root) => {
  if (!root) return [];
  const queue = [ root ];
  const bfsVals = [];

  while (queue.length) {
    const currNode = queue.unshift();
    bfsVals.push(currNode.val);
    if (currNode.left) queue.push(currNode.left);
    if (currNode.right) queue.push(currNode.right);
  }

  return bfsVals;
};

module.exports = {
  breadthFirstValues,
};
