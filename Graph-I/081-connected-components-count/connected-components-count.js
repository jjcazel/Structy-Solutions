// O(n^2) time and O(n) space
const connectedComponentsCount = (graph) => {
  let count = 0;
  const visited = new Set();

  for (let node in graph) {
    if (dfs(node, graph, visited)) count++;
  }

  return count;
};

const dfs = (node, graph, visited) => {
  if (visited.has(String(node))) return false;

  visited.add(String(node));
  for (let neighbor of graph[node]) {
    dfs(neighbor, graph, visited);
  }

  return true;
}

module.exports = {
  connectedComponentsCount,
};
