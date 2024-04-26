// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }


//O(n) time and O(n) space where n is the number of nodes
const treeLevels = (root) => {
  if (!root) return [];
  const stack = [ {node: root, level: 0} ];
  const allLevels = [];


  while (stack.length) {
    const { node, level } = stack.pop();
    if (allLevels.length === level) {
      allLevels.push([ node.val ]);
    } else {
      allLevels[level].push(node.val);
    }
    if (node.right) stack.push({ node: node.right, level: level + 1});
    if (node.left) stack.push({ node: node.left, level: level + 1});
  }


  return allLevels;
};


module.exports = {
  treeLevels,
};

