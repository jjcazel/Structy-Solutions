// O(e) time and O(n) space where e is the num of edges and n is the num of nodes
const semestersRequired = (numCourses, prereqs) => {
  const graph = buildGraph(numCourses, prereqs);
  const semesterCounts = {};


  for (const course in graph) {
    if (graph[course].length === 0) {
      semesterCounts[course] = 1;
    }
  }


  for (let course = 0; course < numCourses; course++) {
    countSemesters(graph, course, semesterCounts);
  }


  return Math.max(...Object.values(semesterCounts));
};


const countSemesters = (graph, course, semesterCounts) => {
  if (semesterCounts[course]) return semesterCounts[course];


  let maxCount = 1;
  for (const neighbor of graph[course]) {
    let currCount = countSemesters(graph, neighbor, semesterCounts);
    if (currCount > maxCount) maxCount = currCount;
  }


  semesterCounts[course] = 1 + maxCount;
  return semesterCounts[course];
}


const buildGraph = (numCourses, edges) => {
  const graph = {};


  for (let course = 0; course < numCourses; course++) {
    if (!graph.hasOwnProperty(course)) graph[course] = [];
  }


  for (const [ a, b ] of edges) {
    graph[a].push(b);
  }


  return graph;
}




module.exports = {
  semestersRequired,
};

