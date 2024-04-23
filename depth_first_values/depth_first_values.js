class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

//
const depthFirstValues = (root) => {
  if (!root) return [];
  const stack = [root];
  const dfsVals = [];

  while (stack.length) {
    const currNode = stack.pop();
    dfsVals.push(currNode.val);
    if (currNode.right) {
      stack.push(currNode.right);
    }
    if (currNode.left) {
      stack.push(currNode.left);
    }
    
  }

  return dfsVals;
};



















//recursive
// const depthFirstValues = (root) => {
//   if (!root) return [];
  
//   const leftVals = depthFirstValues(root.left);
//   const rightVals = depthFirstValues(root.right);
//   return [ root.val, ...leftVals, ...rightVals];
// };

//iterative
// const depthFirstValues = (root) => {
//   if (!root) return [];
//   const output = [];
//   const stack = [root]

//   while (stack.length > 0) {
//     const current = stack.pop();
//     output.push(current.val);
//     if (current.right) {
//       stack.push(current.right)
//     }
//     if (current.left) {
//       stack.push(current.left);
//     } 
//   }

//   return output;
// }





// if (!root.left && !root.right) return root;


//while there is a left or a right node add node value to arr
//once left and right are null start down the right side of tree
// add all nodes to the array until left and right are both null


//       a
//      / \
//     b   c
//    / \
// null  null 




// loop (or recursion) as long as there is a left or right val
// once we hit nulls recurse back down stack and push in vals to arr
// 


//   if (!root.right && root.left) return null;
//   const vals = [];
//   vals.push(root.val);
  
//   depthFirstValues(root.right);






// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const f = new Node('f');


// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;




// depthFirstValues(a);




module.exports = {
  depthFirstValues
};