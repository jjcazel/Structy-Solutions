
//O(n + e) time and O(n + e) space, where n = node and e = edge
const prereqsPossible = (numCourses, prereqs) => {
  const graph = buildGraph(numCourses, prereqs);

  const visited = new Set();
  const visiting = new Set();

  for (let course in graph) {
    if (detectCycle(course, graph, visited, visiting)) return false;
  }

  return true;
};

const detectCycle = (course, graph, visited, visiting) => {
  if (visited.has(course)) return false;
  if (visiting.has(course)) return true;
  visiting.add(course);

  for (let neighbor of graph[course]) {
    if (detectCycle(neighbor, graph, visited, visiting)) return true;
  }

  visiting.delete(course);
  visited.add(course);
  return false;
}

const buildGraph = (numCourses, prereqs) => {
  const graph = {};

  for (let num = 0; num < numCourses; num++) {
    graph[num] = [];
  }

  for (let prereq of prereqs) {
    const [courseA, courseB] = prereq;
    graph[courseA].push(String(courseB));
  }

  return graph;
}


// OUTPUT: boolean, are all classes possible?
// RULES: [A, B] means you have to take class A before you can take B
// INPUT: A list of subarrays listing each prereq pair and a number (n) of total classes to take
// CONSTRAINTS: course ids will be from 0 to n - 1
// APPROACH: create an adjacency list using the input. Then run the cycle detection algorithm (white, grey, black) using that adjacency list. If we detect a cycle return false otherwise return true.

module.exports = {
  prereqsPossible,
};
