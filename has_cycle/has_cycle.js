//O(e) time and O(n) space where e is the num of edges and n is the num of nodes
//white-grey-black
const hasCycle = (graph) => {
  const visited = new Set(); 
  const visiting = new Set();
  
  for (const node in graph) { 
    if (findCycle(graph, node, visited, visiting) === true) return true;
  }
  
  return false;
};


const findCycle = (graph, node, visited, visiting) => {
  if (visited.has(node)) return false;
  if (visiting.has(node)) return true;
  visiting.add(node);
  
  for (const neighbor of graph[node]) {
    if (findCycle(graph, neighbor, visited, visiting)) return true;
  }


  visiting.delete(node);
  visited.add(node);


  return false;
}




module.exports = {
  hasCycle,
};

