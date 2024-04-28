//O(e) time and O(n) space where e is the num of edges and n is the num of nodes
const longestPath = (graph) => {
  const distances = {};


  for (const node in graph) {
    if (graph[node].length === 0) {
      distances[node] = 0;
    }
  }


  for (const node in graph) {
    countDistance(graph, node, distances);
  }


  return Math.max(...Object.values(distances));
};


const countDistance = (graph, node, distances) => {
  if (node in distances) return distances[node];


  let maxDistance = 0;
  for (const neighbor of graph[node]) {
    let currDistance = countDistance(graph, neighbor, distances);
    if (currDistance > maxDistance) maxDistance = currDistance;
  }


  distances[node] = 1 + maxDistance;
  return distances[node];
}


module.exports = {
  longestPath,
};

