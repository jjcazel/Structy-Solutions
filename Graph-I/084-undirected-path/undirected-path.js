// O(e) time and O(n) space where e is the number of edges and n is the number of nodes on the stack
const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = makeGraph(edges); 
  return hasPath(graph, nodeA, nodeB, new Set());
};

function hasPath(graph, src, dst, visited) {
  if (src === dst) return true;
  if (visited.has(src)) return false;
  visited.add(src);
  for (const neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst, visited)) return true;
  }

  return false;
}

function makeGraph(edges) {
  const graph = {};
  for (const edge of edges) {
    const [ nodeA, nodeB ] = edge;
    if (!(nodeA in graph)) graph[nodeA] = [];
    if (!(nodeB in graph)) graph[nodeB] = [];
    graph[nodeA].push(nodeB);
    graph[nodeB].push(nodeA);
  }

  return graph;
}

// const edges = [
//   ['i', 'j'],
//   ['k', 'i'],
//   ['m', 'k'],
//   ['k', 'l'],
//   ['o', 'n']
// ];

// console.log(makeGraph(edges));


module.exports = {
  undirectedPath,
};
