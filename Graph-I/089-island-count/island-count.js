
// O(r X c) time and O(r X c) extra space
const islandCount = (grid) => {
  const visited = new Set();
  let count = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (exploreIsland(row, col, grid, visited) === true) count++;
    }
  }

  return count;
};

const exploreIsland = (row, col, grid, visited) => {
  const rowInbounds = 0 <= row && row < grid.length;
  const colInbounds = 0 <= col && col < grid[0].length;

  if (!rowInbounds || !colInbounds) return false;

  if (grid[row][col] === 'W') return false;

  const key = row + '-' + col;
  if (visited.has(key)) return false;
  visited.add(key);

  exploreIsland(row + 1, col, grid, visited);
  exploreIsland(row - 1, col, grid, visited);
  exploreIsland(row, col + 1, grid, visited);
  exploreIsland(row, col - 1, grid, visited);

  return true;
}

// RETURN: number of islands in the grid
// RULES: L represents land and W represents water
// INPUT: n X m grid (2D array)
// CONSTRAINT: none known
// APPROACH: visit each cell once, keep a visited set to enforce this. For each pice of land perform a DFS to mark it all as visited then return true to signify we've seen it all and count it. Return the total count

module.exports = {
  islandCount,
};
