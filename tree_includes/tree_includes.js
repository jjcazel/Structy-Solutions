// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const treeIncludes = (root, target) => {
  const queue = [root];

  while (queue.length) {
    const currNode = queue.shift();
    if (currNode?.val === target) {
      return true;
    }
    if (currNode?.left) {
      queue.push(currNode.left);
    }
    if (currNode?.right) {
      queue.push(currNode.right);
    }
  }

  return false;
};




















// O(n) time and O(n) space
// const treeIncludes = (root, target) => {
//   if (!root) return false;
//   if (root.val === target) return true;


//   return treeIncludes(root.left, target) || treeIncludes(root.right, target);
// };




//iterative with stack
// const treeIncludes = (root, target) => {
//   if (!root) return false;
  
//   const stack = [ root ];
  
//   while (stack.length) {
//     const current = stack.pop();
    
//     if (current.val === target) return true;
//     if (current.left) stack.push(current.left);
//     if (current.right) stack.push(current.right);
//   }
  
//   return false;
// };




//iterative with q 
// const treeIncludes = (root, target) => {
//   if (!root) return false;
  
//   const q = [ root ];
  
//   while (q.length) {
//     const current = q.shift();
    
//     if (current.val === target) return true;
//     if (current.left) q.push(current.left);
//     if (current.right) q.push(current.right);
//   }
  
//   return false;
// };










module.exports = {
  treeIncludes
};