

//O(n) time and O(n) space where n is the number of nodes
const hasPath = (graph, src, dst) => {
  const stack = [ src ];

  while (stack.length) {
    const currentNode = stack.pop();
    if (currentNode === dst) return true;
    for (const neighbor of graph[currentNode]) {
      stack.push(neighbor);
    }
  }

  return false;
};


module.exports = {
  hasPath,
};

