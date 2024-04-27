//O(e) time and O(n) space where e is num of edges and n is the num of nodes
const connectedComponentsCount = (graph) => {
  const visited = new Set();
  let count = 0;
  
  for (const node in graph) {
    if (explorePaths(graph, node, visited)) count++;
  }

  return count;
};

const explorePaths = (graph, current, visited) => {
  if (visited.has(String(current))) return false;
  visited.add(String(current));

  for (const neighbor of graph[current]) {    
    explorePaths(graph, neighbor, visited);
  }


  return true;
}
























// console.log(connectedComponentsCount({
//   0: [8, 1, 5],
//   1: [0],
//   5: [0, 8],
//   8: [0, 5],
//   2: [3, 4],
//   3: [2, 4],
//   4: [3, 2]
// }))




// O(e) time and O(n) space where e = edges and n = nodes
// const connectedComponentsCount = (graph) => {
//   const visited = new Set(); // [0, 8, 5, 1, 2, 3, 4]
//   let count = 0; // 2
//   for (let node in graph) { // 2
//     console.log('visited', visited);
//     if (explorePaths(graph, +node, visited) === true) {
//       count++;
//     }
//   }
  
//   return count;
// };


// const explorePaths = (graph, current, visited) => {
//   if (visited.has(current)) return false;


//   visited.add(current);
  
//   for (let neighbor of graph[current]) { // 
//     explorePaths(graph, neighbor, visited);
//   }
  
//   return true;
// }




module.exports = {
  connectedComponentsCount,
};

