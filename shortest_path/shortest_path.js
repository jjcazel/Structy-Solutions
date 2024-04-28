

//O(e) time and O(n) where e is the num of edges and n is the num of nodes
const shortestPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  const visited = new Set();
  const queue = [ [nodeA, 0] ];
  
  while (queue.length) {
    const [ currNode, currSize ] = queue.shift(); //can be an O(1) operation
    if (visited.has(String(currNode))) continue;
    visited.add(String(currNode));
    if (currNode === nodeB) {
      return currSize;
    }
    for (const neighbor of graph[currNode]) {
      queue.push([ neighbor, currSize + 1 ]);
    }
  }


  return -1;
};




const buildGraph = (edges) => {
  const graph = {};
  
  for (let edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    
    graph[a].push(b);
    graph[b].push(a);
  }
  
  return graph;
};


module.exports = {
  shortestPath,
};

