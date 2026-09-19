// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// O(n) (technically O(n^2)) time and O(n) space where n is the number of nodes
const treeLevels = (root) => {
  if (root === null) return [];
  const queue = [ [root, 0] ];
  const levels = [];

  while (queue.length) {
    const [ currNode, level ] = queue.shift(); // assuming this can be a constant operation
    if (!(Array.isArray(levels[level]))) {
      levels.push([]);
    }
    levels[level].push(currNode.val);
    if (currNode.left) {
      queue.push([ currNode.left, level + 1 ]);
    }
    if (currNode.right) {
      queue.push([ currNode.right, level + 1 ]);
    }
  }

  return levels;
};

module.exports = {
  treeLevels,
};
