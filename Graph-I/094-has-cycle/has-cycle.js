
// O(n) time and O(n) space where n is the number of nodes in the graph
const hasCycle = (graph) => {
  const visited = new Set();

  for (let node in graph) {
    if (hasCycleHelper(node, graph, visited) === true) return true;
  }

  return false;
};

const hasCycleHelper = (node, graph, visited) => {
  if (node === null) return false;
  if (visited.has(node)) return true;
  visited.add(node);

  for (let neighbor of graph[node]) {
    if (hasCycleHelper(neighbor, graph, visited) === true) return true;
  }

  visited.delete(node);

  return false;
}


// OUTPUT: boolean of whether the graph contains a cycle
// RULES: use adjacency list to traverse the nodes in the graph
// INPUT: graph in the form of an object representing an adjacency list
// CONSTRAINT: None known
// APPROACH: traverse through each node and its neighbors. Keep a visited set. If I ever see a neighbor twice in one DFS pass return true otherwise if I get through the whole graph w/o returning true, return false

module.exports = {
  hasCycle,
};
