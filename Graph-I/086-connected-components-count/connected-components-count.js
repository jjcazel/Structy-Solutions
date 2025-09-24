// O(e) time and O(n) where e is the number of edges
const connectedComponentsCount = (graph) => {
  let count = 0; // 2
  const visited = new Set();
  for (let node in graph) { // 2
    console.log('visited', visited);
    if (countComponent(graph, visited, node)) count++;
  }

  return count;
};
// visited = [ 0, 5, 8, 1, 2, 4, 3]
function countComponent(graph, visited, node) {
  if (visited.has(String(node))) return false;
  visited.add(String(node));

  for (let neighbor of graph[node]) {
    countComponent(graph, visited, neighbor)
  }

  return true;
}

connectedComponentsCount({
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2]
});

module.exports = {
  connectedComponentsCount,
};
