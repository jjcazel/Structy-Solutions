
// O(r * c) time and O(r * c) r = rows and c = columns
const minimumIsland = (grid) => {
  let minSize = Infinity;
  const visited = new Set();

  for (let row = 0; row < grid.length; row++) {
    for (col = 0; col < grid[0].length; col++) {
      let size = exploreIsland(row, col, grid, visited);
      minSize = size === 0 ? minSize : Math.min(size, minSize);
    }
  }

  return minSize;
};

const exploreIsland = (row, col, grid, visited) => {
  const rowInbounds = 0 <= row && row < grid.length;
  const colInbounds = 0 <= col && col < grid[0].length;

  if (!rowInbounds || !colInbounds) return 0;

  const key = row + '-' + col;
  if(visited.has(key)) return 0;
  visited.add(key);

  if (grid[row][col] === 'W') return 0;

  let size = 1;
  size += exploreIsland(row + 1, col, grid, visited);
  size += exploreIsland(row - 1, col, grid, visited);
  size += exploreIsland(row, col + 1, grid, visited);
  size += exploreIsland(row, col - 1, grid, visited);

  return size;
}

// RETURN: min isalnd size (num)
// RULES: W = water and L = land.Traverse the grid graph. Width could be different than height. Track where we've visited
// INPUT: gird graph
// CONSTRAINT: 
// APPROACH: 

module.exports = {
  minimumIsland,
};
