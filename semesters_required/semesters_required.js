//O(p) time and O(n) space where p is the num of prereqs and n is the num of nodes
const semestersRequired = (numCourses, prereqs) => {
  const graph = buildGraph(numCourses, prereqs);
  const semesterPaths = {};
  
  for (const course in graph) {
    if (graph[course].length === 0) {
      semesterPaths[course] = 1;
    }
  }
  
  for (let i = 0; i < numCourses; i++) { // 1
    countSemesters(graph, i, semesterPaths);
  }


  return Math.max(...Object.values(semesterPaths));
};


const countSemesters = (graph, node, semesterPaths) => {
  if (node in semesterPaths) return semesterPaths[node]; 


  let maxSemesterCount = 0; // 2
  for (const neighbor of graph[node]) {
    let currCount = countSemesters(graph, neighbor, semesterPaths); // 2
    if (currCount > maxSemesterCount) {
      maxSemesterCount = currCount;
    }
  }


  semesterPaths[node] = 1 + maxSemesterCount;
  return semesterPaths[node];
}


const buildGraph = (numCourses, prereqs) => {
  const graph = {};


  for (let i = 0; i < numCourses; i++) {
    graph[i] = [];
  }
  
  for (const [ a, b ] of prereqs) {
    graph[a].push(b);
  }


  return graph;
}


module.exports = {
  semestersRequired,
};

