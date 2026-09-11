// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// O(n) time and O(n) space where n is the number of nodes
const bottomRightValue = (root) => {
  const queue = [ root ];
  let value = '';
  
  while (queue.length) {
    const currNode = queue.unshift();
    value = currNode.val;
    if (currNode.left) {
      queue.push(currNode.left);
    }
    if (currNode.right) {
      queue.push(currNode.right);
    }
  }

  return value;
};

module.exports = {
  bottomRightValue,
};
