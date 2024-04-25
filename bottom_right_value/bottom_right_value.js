// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }


//O(n) time and O(n) space
const bottomRightValue = (root) => {
  const q = [ root ];
  let rightVal = root.val;


  while (q.length) {
    const currNode = q.shift(); // assume that this is O(1)
    rightVal = currNode.val;
    if (currNode.left) q.push(currNode.left);
    if (currNode.right) q.push(currNode.right);
  }


  return rightVal;
};


module.exports = {
  bottomRightValue,
};

