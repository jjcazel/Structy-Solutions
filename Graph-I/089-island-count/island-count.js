//O (rc) time and O(rc) space, r = rows and c = columns
const islandCount = (grid) => {
  const visited = new Set();
  let count = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (exploreIsland(grid, row, col, visited) === true) count++;
    }
  }

  return count;
};

const exploreIsland = (grid, row, col, visited) => {
  const rowInbounds = 0 <= row && row < grid.length;
  const colInbounds = 0 <= col && col < grid[0].length;
  if (!rowInbounds || !colInbounds) return false;
  
  const pos = `${row}-${col}`;
  if (visited.has(pos)) return false;
  visited.add(pos);
  
  if (grid[row][col] === 'W') return false;
 
  exploreIsland(grid, row - 1, col, visited);  
  exploreIsland(grid, row + 1, col, visited);  
  exploreIsland(grid, row, col - 1, visited);  
  exploreIsland(grid, row, col + 1, visited);  

  return true;
};


module.exports = {
  islandCount,
};
