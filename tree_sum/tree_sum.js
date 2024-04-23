// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

//O(n) time and O(n) space
const treeSum = (root) => {
  if (!root) return 0;
  let sum = 0; 
  let stack = [ root ];


  while (stack.length) {
    const currNode = stack.pop();
    sum += currNode.val;
    if (currNode.left) stack.push(currNode.left);
    if (currNode.right) stack.push(currNode.right);
  }
  
  return sum;
};


module.exports = {
  treeSum,
};

