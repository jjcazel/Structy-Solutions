
// O(n) time and O(n) space where n is the number of nodes
const shortestPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  const queue = [ [nodeA, 0] ];
  const visited = new Set;
  let minPathCount = Infinity;

  while (queue.length) {
    const [ currNode, count ] = queue.shift(); // optimize queue for constant operation
    if (visited.has(currNode)) continue;
    visited.add(currNode);
    if (currNode === nodeB) {
      minPathCount = Math.min(count, minPathCount);
    }
    for (let neighbor of graph[currNode]) {
      queue.push([ neighbor, count + 1 ]);
    }
  }

  return minPathCount === Infinity ? -1 : minPathCount;
};

const buildGraph = (edges) => {
  const graph = {};

  for (let [ a, b ] of edges) {
    if (!(a in graph)) {
      graph[a] = [];
    }
    graph[a].push(b);
    if (!(b in graph)) {
      graph[b] = [];
    }
    graph[b].push(a);
  }

  return graph;
}

module.exports = {
  shortestPath,
};
