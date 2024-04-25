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
  const stack = [ {node: root, level: 0} ]; // [ {node: {val: d, ...}, level: 2}, {node: {val: }, level: 1} ]
  const levels = []; // [['a'], ['b', 'c'], []]


  while (stack.length) {
    const currNodeAndLevel = stack.pop(); //
    const currNode = currNodeAndLevel.node; // {val: 'a', left: {...}}
    const currLevel = currNodeAndLevel.level;// 2
    if (levels[currLevel] == null) {
      levels[currLevel] = [];
    }
    if (currNode) {
      levels[currLevel].push(currNode.val);
      if (currNode.right) {
        stack.push({node: currNode.right, level: currLevel + 1});
      }
      if (currNode.left) {
        stack.push({node: currNode.left, level: currLevel + 1});
      }
    }
  }


  return levels;
};


module.exports = {
  treeLevels,
};

