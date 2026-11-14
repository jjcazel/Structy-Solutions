
// O(v + e) time and O(v) space where v = vectors and e = edges
const prereqsPossible = (numCourses, prereqs) => {
  const graph = makeGraph(prereqs, numCourses);

  const visited = new Set();
  const visiting = new Set();

  for (let node in graph) {
    if (detectCycle(node, graph, visited, visiting) === false) return false;
  }

  return true;
};

const detectCycle = (node, graph, visited, visiting) => {
  if (visited.has(node)) return;

  if (visiting.has(node)) return false;
  visiting.add(node);

  for (let neighbor of graph[node]) {
    if (detectCycle(neighbor, graph, visited, visiting) === false) return false;
  }

  visiting.delete(node);
  visited.add(node);

  return true;
}

const makeGraph = (prereqs, numCourses) => {
  const graph = {};

  for (let num = 0; num < numCourses; num++) {
    graph[num] = [];
  }

  for (let prereq of prereqs) {
    const [a, b] = prereq;
    graph[a].push(b);
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
