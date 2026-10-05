
// O(n) time and O(n) extra space 
const connectedComponentsCount = (graph) => {
  const visited = new Set();
  let count = 0;

  for (let node in graph) {
    if (exploredComponent(node, graph, visited) === true) count++;
  }

  return count;
};

const exploredComponent = (node, graph, visited) => {
  if (visited.has(String(node))) return false;

  visited.add(String(node));

  for (let neighbor of graph[node]) {
    exploredComponent(neighbor, graph, visited);
  }

  return true;
}

module.exports = {
  connectedComponentsCount,
};
