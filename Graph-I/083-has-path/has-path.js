//O(e) time and O(n) where e is the edges and n is the num of nodes
const hasPath = (graph, src, dst) => {
  if (src === dst) return true;

  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst) === true) return true;
  }

  return false;
};

module.exports = {
  hasPath,
};
