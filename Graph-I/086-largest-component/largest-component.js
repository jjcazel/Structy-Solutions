
// O(n) time and O(n) space, where n is the number of nodes
const largestComponent = (graph) => {
  const visited = new Set();
  let maxSize = 0;

  for (let node in graph){
    let size = exploreIsland(node, graph, visited);
    maxSize = Math.max(size, maxSize);
  }

  return maxSize;
};

const exploreIsland = (node, graph, visited) => {
  if (visited.has(String(node))) return 0;

  visited.add(String(node));

  let size = 1;
  for (let neighbor of graph[node]) {
    size += exploreIsland(neighbor, graph, visited);
  }

  return size;
}

module.exports = {
  largestComponent,
};
