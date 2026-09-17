// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// O(n) time and O(n) space where n is the number of nodes
const treeValueCount = (root, target) => {
  if (root === null) 
  const stack = [ root ];
  let targetCount = 0;
  
  while (stack.length) {
    const currNode = stack.pop();
    if (currNode.val === target) targetCount++;
    if (currNode.left) {
      stack.push(currNode.left);
    }
    if (currNode.right) {
      stack.push(currNode.right);
    }
  }

  return targetCount;
};

//      12
//    /   \
//   6     6
//  / \     \
// 4   6     12

// treeValueCount(a,  6); // -> 3

module.exports = {
  treeValueCount,
};
