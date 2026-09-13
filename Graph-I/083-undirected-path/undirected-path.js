
// O(e) time where e is the number of edges and O(n) space
const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  console.log(graph);
  const visited = new Set();

  if (explore(graph, nodeA, nodeB, visited)) return true;

  return false;
};

const explore = (graph, src, dst, visited) => {
  if (src === dst) return true;
  if (visited.has(src)) return false;

  visited.add(src);

  for (let neighbor of graph[src]) {
    if (explore(graph, neighbor, dst, visited) === true) return true;
  }

  return false;
}

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

const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];

undirectedPath(edges, 'j', 'm');

module.exports = {
  undirectedPath,
};
