// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }


const treeMinValue = (root) => {
  const queue = [ root ];
  let minValue = Infinity;

  while (queue.length) {
      const currNode = queue.shift() // assume this is a constant time operation
      if (currNode.val < minValue) {
          minValue = currNode.val;
      }
      if (currNode.left) queue.push(currNode.left);
      if (currNode.right) queue.push(currNode.right);
  }

  return minValue;

};

























//recursive
// const treeMinValue = (root) => {
//   if (!root) return Infinity;
//   return Math.min(treeMinValue(root.left), treeMinValue(root.right), root.val);
// };




// iterative with stack
// const treeMinValue = (root) => {
//   let minVal = root.val;
//   const stack = [ root ];
  
//   while (stack.length) {
//     const curr = stack.pop();
//     if (curr.val < minVal) minVal = curr.val;
//     if (curr.left) stack.push(curr.left);
//     if (curr.right) stack.push(curr.right);
//   }
  
//   return minVal;
// };




//iterative with q 
// const treeMinValue = (root) => {
//   let minVal = root.val;
//   const q = [ root ];
  
//   while (q.length) {
//     const curr = q.shift();
//     if (curr.val < minVal) minVal = curr.val;
//     if (curr.left) q.push(curr.left);
//     if (curr.right) q.push(curr.right);
//   }
  
//   return minVal;
// };










module.exports = {
  treeMinValue
};