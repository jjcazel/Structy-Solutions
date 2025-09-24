// O(e) time and O(n) space where e is the edges
const largestComponent = (graph) => {
  let maxSize = -Infinity;
  const visited = new Set();

  for (let node in graph) {
    const currComponentSize = componentSize(graph, node, visited);
    if ( currComponentSize > maxSize) maxSize = currComponentSize;
  }

  return maxSize;
};

function componentSize(graph, node, visited) {
  if (visited.has(String(node))) return 0;
  visited.add(String(node));

  let size = 1;
  for (let neighbor of graph[node]) {
    size += componentSize(graph, neighbor, visited);
  }

  return size;
}

module.exports = {
  largestComponent,
};
