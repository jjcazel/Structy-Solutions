//O(e) time and O(n) where e is the num of edges and n is the num of nodes
const connectedComponentsCount = (graph) => {
  const visited = new Set();
  let compCount = 0;

  for (const node in graph) {
    if (exploreComponent(graph, node, visited)) compCount++;;
  }

  return compCount;
};


const exploreComponent = (graph, node, visited) => {
  if (visited.has(String(node))) return false;
  visited.add(String(node));

  for (const neighbor of graph[node]) {
    exploreComponent(graph, neighbor, visited);
  }

  return true;
}


module.exports = {
  connectedComponentsCount,
};

