
// O(n) time and O(n) space 
const hasCycle = (graph) => {
  const visited = new Set();
  const visiting = new Set();

  for (let node in graph) {
    if (detectCycle(node, graph, visited, visiting) === true) return true;
  }

  return false;
};

const detectCycle = (node, graph, visited, visiting) => {
  if (visited.has(node)) return false;

  if (visiting.has(node)) return true;
  visiting.add(node);
  
  for (let neighbor of graph[node]) {
    if (detectCycle(neighbor, graph, visited, visiting) === true) return true;
  }

  visiting.delete(node);
  visited.add(node);
  
  return false;
}


// OUTPUT: boolean, does graph have hasCycle
// RULES: directed graph
// INPUT: adjacency list
// CONSTRAINTS: none
// APPROACH: use two sets (grey and black) to manage iterations through the graph. One set will track what is being visited in each path traversal (grey). The other set will track what has been visited ever (black). Make sure to remove the node from the set on the current path and move it to the black set when done with that traversal. This will keep us from visiting previously visited nodes more than once. If we see the same node twice in one traversal return true otherwise return false. Do this recursively with a helper function.

module.exports = {
  hasCycle,
};
