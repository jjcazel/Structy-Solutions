// O(n^2) time and O(n) space
// const undirectedPath = (edges, nodeA, nodeB) => {
//   const adjacenyList = makeList(edges);
//   const stack = [ nodeA ];
//   const visited = new Set();

//   while (stack.length) {
//     const currNode = stack.pop();
//     if (currNode === nodeB) return true;
//     if (visited.has(currNode)) continue;
//     visited.add(currNode);
//     for (let neighbor of adjacenyList[currNode]) {
//       stack.push(neighbor);
//     }
//   }

//   return false;
// };

// O(n^2) time and O(n) space
const undirectedPath = (edges, nodeA, nodeB) => {
  const adjacenyList = makeList(edges);
  return hasPath(adjacenyList, nodeA, nodeB, new Set());
};

const hasPath = (graph, src, dst, visited) => {
  if (visited.has(src)) return false;
  if (src === dst) return true;

  visited.add(src);
  
  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst, visited)) return true;
  }

  return false;
}

const makeList = (edges) => {
  const graph = {};

  for (let [src, neighbor] of edges) {
    if (!graph[src]) graph[src] = [];
    if (!graph[neighbor]) graph[neighbor] = [];
    graph[src].push(neighbor);
    graph[neighbor].push(src);
  }

  return graph;
}

module.exports = {
  undirectedPath,
};
