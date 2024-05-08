
//O(n) time and O(n) space
const closestCarrot = (grid, startRow, startCol) => {
  const visited = new Set();
  const queue = [ [startRow, startCol, 0] ];


  while (queue.length) {
    const [ row, col, distance ] = queue.shift(); // assume O(1)
    
    if (grid[row][col] === 'C') return distance;
    
    const position = row + ',' + col;
    if (visited.has(position) || grid[row][col] === 'X') continue;
    visited.add(position);


    const neighbors = [
      [row + 1, col],
      [row - 1, col],
      [row, col + 1],
      [row, col - 1]
    ]


    for (const [ neighborRow, neighborCol ] of neighbors) {
      if (
        neighborRow >= 0 && neighborRow < grid.length && 
        neighborCol >= 0 && neighborCol < grid[0].length
      ) {
        queue.push([ neighborRow, neighborCol, distance + 1 ]);
      }
    }
  }


  return -1;
};







module.exports = {
  closestCarrot,
};

