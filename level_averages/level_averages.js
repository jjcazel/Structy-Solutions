// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }


//O(n) and O(n) space where n is the number of nodes
const levelAverages = (root) => {
  const allLevels = [];
  fillLevels(root, allLevels, 0);


  const avgs = [];
  for (let level = 0; level < allLevels.length; level++) {
    const sum = allLevels[level].reduce((acc, num) => acc + num);
    avgs[level] = sum / allLevels[level].length;
  }


  return avgs;
};


const fillLevels = (root, levels, levelNum) => {
  if (!root) return;


  if (levelNum === levels.length) {
    levels[levelNum] = [ root.val ];
  } else {
    levels[levelNum].push(root.val);
  }


  levelNum += 1;
  
  fillLevels(root.left, levels, levelNum);
  fillLevels(root.right, levels, levelNum);
}


module.exports = {
  levelAverages,
};

