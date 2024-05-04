const graph = {
  a: ['c', 'b'],
  b: ['c'],
  c: []
};


longestPath(graph); // -> 2
const graph = {
  a: ['c', 'b'],
  b: ['c'],
  c: [],
  q: ['r'],
  r: ['s', 'u', 't'],
  s: ['t'],
  t: ['u'],
  u: []
};


longestPath(graph); // -> 4
const graph = {
  h: ['i', 'j', 'k'],
  g: ['h'],
  i: [],
  j: [],
  k: [],
  x: ['y'],
  y: []
};


longestPath(graph); // -> 2
const graph = {
  a: ['b'],
  b: ['c'],
  c: [],
  e: ['f'],
  f: ['g'],
  g: ['h'],
  h: []
};


longestPath(graph); // -> 3
const graph = {
  a: ['b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o'],
  b: ['c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o'],
  c: ['d', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o'],
  d: ['e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o'],
  e: ['f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o'],
  f: ['g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't'],
  g: ['h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't'],
  h: ['i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't'],
  i: ['j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't'],
  j: ['k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w'],
  k: ['l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w'],
  l: ['m', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y'],
  m: ['n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x'],
  n: ['o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  o: ['p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x'],
  p: ['q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y'],
  q: ['r', 's', 't', 'u', 'v', 'w', 'x', 'y'],
  r: ['s', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  s: ['t', 'u', 'v', 'w', 'x', 'y', 'z'],
  t: ['u', 'v', 'w', 'x', 'y', 'z'],
  u: ['v', 'w', 'x', 'y', 'z'],
  v: ['w', 'x', 'y', 'z'],
  w: ['x', 'y', 'z'],
  x: ['y', 'z'],
  y: ['z'],
  z: []
};


longestPath(graph); // -> 25
// O(e) time and O(n) space where e is the number of edges and n is the num of nodes
const longestPath = (graph) => {
  const distances = {};
  for (const node in graph) {
    if (graph[node].length === 0) {
      distances[node] = 0;
    }
  }


  for (const node in graph) {
    traversePath(graph, node, distances);
  }


  return Math.max(...Object.values(distances));
};


const traversePath = (graph, node, distances) => {
  if (node in distances) return distances[node];


  let maxDistance = 0;
  for (const neighbor of graph[node]) {
    let currDistance = traversePath(graph, neighbor, distances);
    maxDistance = Math.max(currDistance, maxDistance);
  }


  distances[node] = 1 + maxDistance;
  return distances[node];
}


module.exports = {
  longestPath,
};

