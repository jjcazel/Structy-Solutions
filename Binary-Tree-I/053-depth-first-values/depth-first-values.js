// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

//O(n) time and O(n) space
const depthFirstValues = (root, array = []) => {
  if (!root) return [];
  array.push(root.val);
  depthFirstValues(root.left, array);
  depthFirstValues(root.right, array);
  
  return array;
};

// const dfsRecursiveHelper = (root, array) => {
//   
// }

module.exports = {
  depthFirstValues,
};
