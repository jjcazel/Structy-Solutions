// O(e) time and O(n) space where n is the num of nodes nad e is the num of edges
const largestComponent = (graph) => {
  let maxCount = 0;
  let visited = new Set();
  for (const node in graph) {
    let currCount = exploreSize(graph, node, visited);
    if (currCount > maxCount) maxCount = currCount
  }

  return maxCount;
};

const exploreSize = (graph, node, visited) => {
  if (visited.has(String(node))) return 0;
  visited.add(String(node));

  let sum = 1;
  for (const neighbor of graph[node]) {
    sum += exploreSize(graph, neighbor, visited);
  }

  return sum;
}













































// const largestComponent = (graph) => {
//   const visited = new Set();
//   let maxLength = 0;
  
//   for (let node in graph) {
//     const size = exploreSize(graph, node, visited);
//     if (size > maxLength) maxLength = size;
//   }
  
//   return maxLength;
// };


// const exploreSize = (graph, node, visited) => {
//   if (visited.has(String(node))) return 0
  
//   visited.add(String(node));
  
//   let size = 1;
//   for (let neighbor of graph[node]) {
//     size += exploreSize(graph, neighbor, visited)
//   }
  
//   return size;
// }


module.exports = {
  largestComponent,
};

