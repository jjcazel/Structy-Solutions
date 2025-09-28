// O(e) time and O(n) space where e is num of edges and n
const shortestPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  const visited = new Set(); // {'w', 'v'}
  const queue = [[ nodeA, 0 ]]; // [ ['x', 1], ['z', 2] ]

  while (queue.length > 0) {
    const [ currNode, edgeCount ] = queue.shift();
    if (visited.has(currNode)) continue;
    visited.add(currNode);
    if (currNode === nodeB) return edgeCount;
    for (let neighbor of graph[currNode]) {
      queue.push([neighbor, edgeCount + 1]);
    }
  }

  return -1;
};

function buildGraph(edges) {
  const graph = {};
  for (let [ nodeA, nodeB ] of edges) {
    if (!(nodeA in graph)) graph[nodeA] = [];
    if (!(nodeB in graph)) graph[nodeB] = [];
    graph[nodeA].push(nodeB);
    graph[nodeB].push(nodeA)
  }

  return graph;
}

// { 
//   w: [ 'x', 'v' ], 
//   x: [ 'w', 'y' ], 
//   y: [ 'x', 'z' ], 
//   z: [ 'y', 'v' ], 
//   v: [ 'z', 'w' ] 
// } 

module.exports = {
  shortestPath,
};
