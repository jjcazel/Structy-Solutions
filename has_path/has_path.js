

// O(e) time and O(n) space where e is the num of edges and n is the num of nodes
const hasPath = (graph, src, dst) => {
  if (src === dst) return true;
  for (const neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst)) return true;
  }
  return false;
};


module.exports = {
  hasPath,
};

