// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

/O(n) time and O(n) space where n is the number of nodes
const bottomRightValue = (root) => {
  const queue = [ root ];
  let lastValue = root.val; // -4
	
  while (queue.length) {
    const currNode = queue.shift(); //assume this is an O(1) operation
    lastValue = currNode.val;
    if (currNode.left) queue.push(currNode.left);
    if (currNode.right) queue.push(currNode.right);
  }
  
  return lastValue;


};


module.exports = {
  bottomRightValue,
};

