// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }


//O(n) time and O(n) space
const leafList = (root) => {
  if (!root) return [];
  if (!root.right && !root.left) return [ root.val ];
  return [ ...leafList(root.left), ...leafList(root.right) ];
};


module.exports = {
  leafList,
};

