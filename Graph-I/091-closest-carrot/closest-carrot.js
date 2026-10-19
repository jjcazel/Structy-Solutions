
// O(r * c) time and O(r * c) space, where r = row and c = col
const closestCarrot = (grid, startRow, startCol) => {
  const visited = new Set();
  const queue = [ [startRow, startCol, 0] ];

  while (queue.length) {
    const [row, col, distance] = queue.shift();
    const key = row + '-' + col;
    if (visited.has(key)) continue;
    visited.add(key);
    if (grid[row][col] === 'X') continue;
    if (grid[row][col] === 'C') return distance;
    if (isInbounds(row - 1, grid.length)) queue.push([ row - 1, col, distance + 1] );
    if (isInbounds(row + 1, grid.length)) queue.push([ row + 1, col, distance + 1] );
    if (isInbounds(col - 1, grid[0].length)) queue.push([ row, col - 1, distance + 1] );
    if (isInbounds(col + 1, grid[0].length)) queue.push([ row, col + 1, distance + 1] );
  }

  return -1;
};

const isInbounds = (cell, length) => {
  return 0 <= cell && cell < length;
}

// RETURN: length of path or -1 for no path to the Carrot
// RULES: Can't go through walls (X)
// INPUT: Grid and starting row and col
// CONSTRAINTS: None known
// APPROACH: Use BDF (queue) to track each node and length of path travelled so far. Ignore 'X's. Start from start row and col. Keep a visited set to track where we've been. If I find the C I return the current length. If I don't I return -1.

module.exports = {
  closestCarrot,
};
