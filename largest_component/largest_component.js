// O(e) time and O(n) where e is the num of edges and n is the num of nodes
const largestComponent = (graph) => {
  const visited = new Set();
  let maxCount = 0;
  for (const node in graph) {
    let currCount = countPath(graph, node, visited);
    if (currCount > maxCount) maxCount = currCount;
  }
  
  return maxCount;
};


const countPath = (graph, node, visited) => {
  if (visited.has(String(node))) return 0;
  visited.add(String(node));


  let currCount = 1;
  for (const neighbor of graph[node]) {
    currCount += countPath(graph, neighbor, visited);
  }


  return currCount;
}


module.exports = {
  largestComponent,
};

