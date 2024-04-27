// O(e) time and O(n) space where e is the num of edges and n is the number of nodes
const shortestPath = (edges, nodeA, nodeB) => {
  const visited = new Set();
  const adjacencyList = buildGraph(edges);
  const queue = [ [nodeA, 0] ];


  while (queue.length) {
  	const [ currNode, count ] = queue.shift();
  	if (visited.has(currNode)) continue;
  	visited.add(currNode);
  	if (currNode === nodeB) return count;
  	for (const neighbor of adjacencyList[currNode]) {
  		queue.push([ neighbor, count + 1 ]);
  	}
  }


  return -1;
};


const buildGraph = (edges) => { 
  const graph = {};
  for (const [ nodeA, nodeB ] of edges) {
    if (!graph.hasOwnProperty(nodeA)) graph[nodeA] = [];
    if (!graph.hasOwnProperty(nodeB)) graph[nodeB] = [];
    graph[nodeA].push(nodeB);
    graph[nodeB].push(nodeA);
  } 
  return graph;
}




module.exports = {
  shortestPath,
};

