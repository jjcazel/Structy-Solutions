// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }


//O(n) time and O(n) space where n is the number of nodes
function allTreePaths(root) {
  const allPaths = allTreePathsHelper(root);
  for (const path of allPaths) {
    path.reverse();
  }
  return allPaths;
}


const allTreePathsHelper = (root) => {
  if (!root) return [];
  if (!root.right && !root.left) return [[ root.val ]];
  const paths = [];
  
  const leftSubPaths = allTreePathsHelper(root.left);
  for (const subPath of leftSubPaths) {
    subPath.push(root.val);
    paths.push(subPath);
  }
  const rightSubPaths = allTreePathsHelper(root.right);
  for (const subPath of rightSubPaths) {
    subPath.push(root.val);
    paths.push(subPath);
  }


  return paths;
};


module.exports = {
  allTreePaths,
};

