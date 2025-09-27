//O(rc) time and O(rc) space where r is rows and c is cols
const minimumIsland = (grid) => {
  let minIslandSize = Infinity;
  const visited = new Set();
  for (let row = 0; row < gird.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      const currIslandSize = countIslandSize(grid, row, col, visited);
      if (currIslandSize !== 0 && currIslandSize < minIslandSize) minIslandSize = currIslandSize;
    }
  }

  return minIslandSize;
};

function countIslandSize(grid, row, col, visited) {
  let currSize = 0;
  const stack = [ [row, col] ];

  while (stack.length > 0) {
    const [ row, col ] = stack.pop();
    if (grid[row][col] === 'W') continue;
    const currPosition = row + ',' + col;
    if (visited.has(currPosition)) continue;
    visited.add(currPosition);

    const neighbors = getNeighbors(grid, row, col);
    for (const neighbor of neighbors) {
      stack.push(neighbor)
    }
    currSize++;
  }

  return currSize;
}

function getNeighbors(grid, row, col) {
  const neighbors = [];
  if (row + 1 >= 0 && row + 1 < grid.length) neighbors.push([ row + 1, col ]);
  if (row - 1 >= 0 && row - 1 < grid.length) neighbors.push([ row - 1, col ]);
  if (col + 1 >= 0 && col + 1 < grid[0].length) neighbors.push([ row, col + 1]);
  if (col - 1 >= 0 && col - 1 < grid[0].length) neighbors.push([ row, col - 1]);

  return neighbors;
}

module.exports = {
  minimumIsland,
};
