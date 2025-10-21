// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

//O(n) time and O(n) space where n is the number of nodes
const treeValueCount = (root, target) => {
  if (root === null) return 0;
  const stack = [ root ];
  let count = 0;
  
  while (stack.length > 0) {
    const currNode = stack.pop();
    if (currNode.val === target) count += 1;
    if (currNode.right) stack.push(currNode.right);
    if (currNode.left) stack.push(currNode.left);
  }

  return count;
};

module.exports = {
  treeValueCount,
};

//      12
//    /   \
//   6     6
//  / \     \
// 4   6     12

// count = 3