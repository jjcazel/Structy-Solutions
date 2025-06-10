// O(n) time and O(n) space
const hasPath = (graph, src, dst) => {
  const stack = [ src ];

  while (stack.length) {
    const currNode = stack.pop();
    if (currNode === dst) return true;
    for (let neighbor of graph[currNode]) {
      stack.push(neighbor);
    }
  }

  return false;
};

module.exports = {
  hasPath,
};
