const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];


undirectedPath(edges, 'j', 'm'); // -> true
const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];


undirectedPath(edges, 'm', 'j'); // -> true
const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];


undirectedPath(edges, 'l', 'j'); // -> true
const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];


undirectedPath(edges, 'k', 'o'); // -> false
const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];


undirectedPath(edges, 'i', 'o'); // -> false
const edges = [
  ['b', 'a'],
  ['c', 'a'],
  ['b', 'c'],
  ['q', 'r'],
  ['q', 's'],
  ['q', 'u'],
  ['q', 't'],
];




undirectedPath(edges, 'a', 'b'); // -> true
const edges = [
  ['b', 'a'],
  ['c', 'a'],
  ['b', 'c'],
  ['q', 'r'],
  ['q', 's'],
  ['q', 'u'],
  ['q', 't'],
];


undirectedPath(edges, 'a', 'c'); // -> true
const edges = [
  ['b', 'a'],
  ['c', 'a'],
  ['b', 'c'],
  ['q', 'r'],
  ['q', 's'],
  ['q', 'u'],
  ['q', 't'],
];


undirectedPath(edges, 'r', 't'); // -> true
const edges = [
  ['b', 'a'],
  ['c', 'a'],
  ['b', 'c'],
  ['q', 'r'],
  ['q', 's'],
  ['q', 'u'],
  ['q', 't'],
];


undirectedPath(edges, 'r', 'b'); // -> false
const edges = [
  ['s', 'r'],
  ['t', 'q'],
  ['q', 'r'],
];


undirectedPath(edges, 'r', 't'); // -> true
const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  return dfs(graph, nodeA, nodeB, new Set());
};


const dfs = (graph, src, dst, visited) => {
  if (src === dst) return true;
  if (visited.has(src)) return false;
  visited.add(src);


  for (let neighbor of graph[src]) {
    if (dfs(graph, neighbor, dst, visited) === true) return true;
  }


  return false;
}


const buildGraph = (edges) => {
  const graph = {};


  for (const [ a, b ] of edges) {
    if (!graph.hasOwnProperty(a)) {
      graph[a] = [];
    }
    if (!graph.hasOwnProperty(b)) {
      graph[b] = [];
    }
    graph[a].push(b);
    graph[b].push(a);
  }


  return graph;
}




module.exports = {
  undirectedPath,
};

