
//O(n) time and O(n) space where n is the number of nodes
const shortestPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  const queue = [ [nodeA, 0] ];
  const visited = new Set();

  while (queue.length) {
    const [ currNode, pathCount ] = queue.shift();
    if (currNode === nodeB) {
      return pathCount;
    }
    for (let neighbor of graph[currNode]) {
      if (!visited.has(neighbor)) {
        queue.push([ neighbor, pathCount + 1]);
      }
      visited.add(neighbor);
    }
  }

  return -1;
};

// { 
//   w: [ 'x', 'v' ], 
//   x: [ 'w', 'y' ], 
//   y: [ 'x', 'z' ], 
//   z: [ 'y', 'v' ], 
//   v: [ 'z', 'w' ] 
// } 

// currNode = w
// nodeB = z


const buildGraph = (edges) => {
  const graph = {};

  for (let [a, b] of edges) {
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
