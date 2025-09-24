// O(e) time and O(e) space where e is edges and n is nodes
const shortestPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  const visited = new Set([nodeA]);
  const queue = [ [nodeA, 0] ]; // [ x,  ]
  while(queue.length) {
    const [ currNode, numEdges ] = queue.shift(); // v
    
    if (currNode === nodeB) return numEdges;
    for (let neighbor of graph[currNode]) {
      if (visited.has(String(neighbor))) continue;
      visited.add(String(neighbor));
      queue.push([neighbor , numEdges + 1]);
    }
  }

  return -1;
};

function buildGraph(edges) {
  const graph = {};
  for (const [ nodeA, nodeB ] of edges) {
    if (!(nodeA in graph)) graph[nodeA] = [];
    if (!(nodeB in graph)) graph[nodeB] = [];
    graph[nodeA].push(nodeB);
    graph[nodeB].push(nodeA);
  }

  return graph;
}

const edges = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v']
];

console.log(shortestPath(edges, 'w', 'z'))

module.exports = {
  shortestPath,
};
