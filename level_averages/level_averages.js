// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }


//O(n) time and O(n) space where n is the number of nodes
const levelAverages = (root) => {
  if (!root) return [];
  const stack = [ {node: root, level: 0} ];
  const allAverages = [];


  while (stack.length) {
    const { node, level } = stack.pop();
    if (allAverages.length === level) {
      allAverages.push([ node.val ]);
    } else {
      allAverages[level].push(node.val);
    }
    if (node.left) stack.push({ node: node.left, level: level + 1});
    if (node.right) stack.push({ node: node.right, level: level + 1});
  }


  for (let level = 0; level < allAverages.length; level++) {
    const sum = allAverages[level].reduce((acc, num) => acc + num);
    allAverages[level] = sum / allAverages[level].length;
  }


  return allAverages;
};


module.exports = {
  levelAverages,
};

