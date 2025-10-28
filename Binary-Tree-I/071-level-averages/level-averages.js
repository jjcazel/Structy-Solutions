// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

//O(n) time and O(n) space where n is the number of nodes
const levelAverages = (root) => {
  const stack = [ [root, 0] ];
  const averages = [];

  while (stack.length > 0) {
    let [ currNode, level ] = stack.pop();
    if (!Array.isArray(averages[level])) {
      averages[level] = [];
    }
    averages[level].push(currNode.val);
    if (currNode.left) stack.push([ currNode.left, level + 1 ]);
    if (currNode.right) stack.push([ currNode.right, level + 1 ]);
  }

  for (let i = 0; i < averages.length; i++) {
    const level = averages[i];
    const sum = level.reduce((acc, ele) => acc + ele, 0);
    averages[i] = sum / level.length;
  }
  
  return averages;
};

module.exports = {
  levelAverages,
};

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

// [ [1, 2] ]
// averages = [[ 3 ], [11, 4], [4, -2, 1]]

// levelAverages(a); // -> [ 3, 7.5, 1 ] 