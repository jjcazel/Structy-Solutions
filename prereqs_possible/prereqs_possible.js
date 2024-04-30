//O(n + p) time and O(n + p) space where n is the num of courses and p is the num of prereqs
const prereqsPossible = (numCourses, prereqs) => {
  const graph = buildGraph(prereqs, numCourses); 
  const visiting = new Set();
  const visited = new Set();


  for (const node in graph) {
    if (!detectCycle(graph, node, visiting, visited)) return false;
  }


  return true;
};


const detectCycle = (graph, node, visiting, visited) => {
  if (visiting.has(node)) return false;
  visiting.add(node);


  for (const neighbor of graph[node]) { 
    if (!detectCycle(graph, neighbor, visiting, visited)) return false;
  }


  visiting.delete(node);
  visited.add(node);


  return true;
}


const buildGraph = (edges, numCourses) => {
  const graph = {};


  for (let course = 0; course < numCourses; course++) {
    if (!graph.hasOwnProperty(course)) {
      graph[course] = [];
    }
  }


  for (const [ a, b ] of edges) {
    graph[a].push(b);
  }


  return graph;
}






module.exports = {
  prereqsPossible,
};

