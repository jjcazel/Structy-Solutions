// O(e) time and O(n) where e is the number of edges
const connectedComponentsCount = (graph) => {
  let count = 0;
  const visited = new Set();

  for (let node in graph) {
    if (!visited.has(node)) {
      explore(graph, node, visited);
      count++;
    }
  }

  return count;
};

function explore(graph, start, visited) {
  const stack = [start];

  while (stack.length) {
    const node = stack.pop();

    if (visited.has(node)) continue;
    visited.add(node);

    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        stack.push(neighbor);
      }
    }
  }
}

module.exports = {
  connectedComponentsCount,
};
