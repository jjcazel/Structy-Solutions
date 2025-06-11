// O(e) time and O(n) space
const largestComponent = (graph) => {
  const visited = new Set();
  let maxCount = 0;
  
  for (let node in graph) {
    const currCount = dfs(node, graph, visited);
    if (currCount > maxCount) maxCount = currCount;
  }

  return maxCount;
};

const dfs = (node, graph, visited) => {
  if (visited.has(node)) return 0;

  visited.add(node); // ['0', '']

  let currCount = 1;
  for (let neighbor of graph[node]) {
    currCount += dfs(neighbor, graph, visited);
  }

  return currCount;
}

module.exports = {
  largestComponent,
};
