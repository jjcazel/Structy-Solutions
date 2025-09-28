const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);

  return hasPath(graph, nodeA, nodeB, new Set());
};

function hasPath(graph, src, dst, visited) {
  if (visited.has(src)) return false; // {'j', 'i', 'k', }
  visited.add(src);

  if (src === dst) return true;

  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst, visited) === true) return true;
  }

  return false;
}

function buildGraph(edges) {
  const graph = {};
  for (const [ nodeA, nodeB ] of edges) {
    if(!(nodeA in graph)) graph[nodeA] = [];
    if(!(nodeB in graph)) graph[nodeB] = [];
    graph[nodeA].push(nodeB);
    graph[nodeB].push(nodeA);
  }

  return graph;
}

module.exports = {
  undirectedPath,
};
