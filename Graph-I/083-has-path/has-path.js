// O(n) time and O(n) space where n is the number of nodes
const hasPath = (graph, src, dst) => {
  const stack = [src];

  while (stack.length) {
    const currNode = stack.pop();
    if (currNode === dst) return true;

    for (const neighbor of graph[currNode]) {
      stack.push(neighbor);
    }
  }

  return false;
};

module.exports = {
  hasPath,
};
