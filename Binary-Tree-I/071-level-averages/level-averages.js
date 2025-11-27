// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

//O(n) time and O(n) space where n is the number of nodes
const levelAverages = (root) => {
  const levels = [];

  gatherLevels(root, levels, 0);

  for (let i = 0; i < levels.length; i++) {
    const level = levels[i];
    const sum = level.reduce((acc, ele) => acc + ele, 0);
    levels[i] = sum / level.length;
  }
  
  return levels;
};

const gatherLevels = (root, levels, levelNum) => {
  if (root === null) return;
  if (!Array.isArray(levels[levelNum])) {
    levels[levelNum] = [];
  }
  levels[levelNum].push(root.val);
  gatherLevels(root.right, levels, levelNum + 1);
  gatherLevels(root.left, levels, levelNum + 1);
}

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