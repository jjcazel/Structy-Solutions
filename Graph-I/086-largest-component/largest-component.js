
// O(e) time and O(e) space where e is the number of edges
const largestComponent = (graph) => {
  let maxCount = -Infinity;
  const visited = new Set();
  
  for (let node in graph) {
    let currCount = explore(node, graph, visited);
    maxCount = Math.max(currCount, maxCount);
  }
  
  return maxCount === -Infinity ? 0 : 1;
};

const explore = (node, graph, visited) => {
  const stack = [ node ];
  let count = 0;

  while (stack.length) {
    const currNode = stack.pop();

    if (visited.has(currNode)) continue;
    visited.add(currNode);
    count++;
    for (let neighbor of graph[currNode]) {
      stack.push(neighbor);
    }
  }

  return count;
}

// visited = { 3, 4, 6, 5, 7, 8 }
// count = 5

// largestComponent({
//   3: [],
//   4: ['6'],
//   6: ['4', '5', '7', '8'],
//   8: ['6'],
//   7: ['6'],
//   5: ['6'],
//   1: ['2'],
//   2: ['1']
// }); // -> 5

module.exports = {
  largestComponent,
};
