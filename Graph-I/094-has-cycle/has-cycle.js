
//O(n + e) time and O(n) space where e = edges and n = nodes
const hasCycle = (graph) => {
  const visited = new Set();
  const visiting = new Set();
  
  for (let node in graph) {
    if (explorePath(node, graph, visited, visiting) === true) return true;
  }

  return false;
};

const explorePath = (node, graph, visited, visiting) => {
  if (visiting.has(node)) return true;
  if (visited.has(node)) return false;
  visiting.add(node);
  
  for (let neighbor of graph[node]) {
    if (explorePath(neighbor, graph, visited, visiting) === true) return true;
  }
  
  visiting.delete(node);
  visited.add(node);
  return false;
}



// OUTPUT: boolean whether there is a cycle in the graph
// RULES: using an adjacency list
// INPUT: adjacency list
// CONSTRAINTS: None known
// APPROACH: Use the white, grey, black approach using two sets. Keep a set of the nodes on the current cycle (grey). Also, keep a set of nodes that have already been visited. 

module.exports = {
  hasCycle,
};
