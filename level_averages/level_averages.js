// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }


//O(n) and O(n) space where n is the number of nodes
const levelAverages = (root) => {
  if (!root) return [];
  const stack = [ { node: root, level: 0 } ];
  const allAvgs = []; // [3 , [11, 4], [4, -2, 1]]


  while (stack.length) {
    const { node, level } = stack.pop(); //node: val = 11, level: 1
    if (allAvgs.length === level) {
      allAvgs[level] = [ node.val ];
    } else {
      allAvgs[level].push(node.val);
    }
    if (node.left) stack.push({ node: node.left, level: level + 1});
    if (node.right) stack.push({ node: node.right, level: level + 1});
  }
  console.log('allAvgs', allAvgs);
  for (let i = 0; i < allAvgs.length; i++) { // i = 1
    for (let j = 0; j < allAvgs[i].length; j++) { // j = 0
      if (i === 0 && j === 0) {
        allAvgs[i] = allAvgs[i][j];
      } else {
        const sum = allAvgs[i].reduce((acc, ele) => acc + ele);
        console.log('sum', sum, 'level', allAvgs[i].length);
        allAvgs[i] = sum / allAvgs[i].length;
      }
    }
  }


  return allAvgs;


};


module.exports = {
  levelAverages,
};

