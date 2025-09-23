// O(e) time and O(n) space where e is the number of edges and n is the number of nodes on the stack
const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = makeGraph(edges); 
  const stack = [nodeA];
  const visited = new Set();

  while (stack.length) {
    const currNode = stack.pop(); // m
    if (visited.has(currNode)) continue;
    visited.add(currNode);
    if (currNode === nodeB) return true;
    for (const neighbor of graph[currNode]) {
      stack.push(neighbor);
    }
  }
  return false;
};

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
