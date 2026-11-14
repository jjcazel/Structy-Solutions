
// O(n + p) time and O(n + p) space where n = number of classes and p = num of prereqs
const prereqsPossible = (numCourses, prereqs) => {
  const graph = makeGraph(prereqs, numCourses);
  
  const visited = new Set();
  const visiting = new Set();

  for (let node in graph) {
    if (detectCycle(node, graph, visited, visiting)) return false;
  }

  return true;
};

const detectCycle = (node, graph, visited, visiting) => {
  if (visited.has(node)) return false;

  if (visiting.has(node)) return true;
  visiting.add(node);

  for (let neighbor of graph[node]) {
    if (detectCycle(neighbor, graph, visited, visiting)) return true;
  }

  visiting.delete(node);
  visited.add(node);

  return false;
}

const makeGraph = (prereqs, numCourses) => {
  const graph = {};

  for (let num = 0; num < numCourses; num++) {
    graph[num] = [];
  }

  for (let prereq of prereqs) {
    const [a, b] = prereq;
    graph[a].push(String(b));
  }

  return graph;
}

// OUTPUT: boolean, are all classes classes possible?
// RULES: each subarray represents a prereq [A, B], courses from 0 to n - 1
// INPUT: n = number of courses, prereqs list
// CONSTRAINTS: only course up to n - 1
// APPROACH: Create an adjacency list or graph out of the prereqs where each prereq points to an array of its related classes. Then run the grey/black cycle detection algorithm. If there is a cycle return false, else return true...

module.exports = {
  prereqsPossible,
};
