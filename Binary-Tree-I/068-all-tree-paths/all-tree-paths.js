// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

//O(n log(n)) time and O(n log(n)) space
const allTreePaths = (root) => {
  const allPaths = _allTreePaths(root);
  for (const path of allPaths) {
    path.reverse();
  }
  return allPaths;
}

const _allTreePaths = (root) => {
  if (root === null) return [];
  if (root.right === null && root.left === null) return [[root.val]];
  const rightPaths = _allTreePaths(root.right);
  const leftPaths = _allTreePaths(root.left);
  
  const allPaths = [];
  for (let path of rightPaths) {
    path.push(root.val);
    allPaths.push(path);
  }
  for (let path of leftPaths) {
    path.push(root.val);
    allPaths.push(path);
  }
  return allPaths;
};

module.exports = {
  allTreePaths,
};


//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

// allTreePaths(a); // ->
// [ 
//   [ 'b', 'd' ], 
//   [ 'b', 'e' ], 
//   [ 'c', 'f' ] 
// ] 