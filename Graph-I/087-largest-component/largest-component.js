// O(e) time and O(n) space e = edges and n = number of nodes stored
const largestComponent = (graph) => {
  let maxCompnentSize = 0;
  const visited = new Set();
  for (let node in graph) { // 0
    const currSize = countComponent(node, graph, visited);
    if (currSize > maxCompnentSize) maxCompnentSize = currSize;
  }

  return maxCompnentSize;
};
// visited = {0, }
function countComponent(node, graph, visited) {
  if (visited.has(node)) return 0;
  visited.add(node);

  let count = 1; // 1
  for (let neighbor of graph[node]) {
    count += countComponent(neighbor, graph, visited);
  }

  return count;
}

module.exports = {
  largestComponent,
};
