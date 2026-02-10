// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// O(n) time and O(n) space where N is the number of nodes
const treeIncludes = (root, target) => {
  if (root === null) return false;
  if (root.val === target) return true;
  return treeIncludes(root.left, target) || treeIncludes(root.right, target);
};

module.exports = {
  treeIncludes,
};

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

// treeIncludes(b, e)
// treeIncludes(d, e)
// treeIncudes(null, e) -> false
// treeIncludes(e, e) -> true