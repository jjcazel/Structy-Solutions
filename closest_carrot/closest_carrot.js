//O(r * c) time and (r * c) space where r is the num of rows and c is the num of cols
const closestCarrot = (grid, startRow, startCol) => {
  const visited = new Set();
  const queue = [ [startRow, startCol, 0] ];
  
  while (queue.length) {
    const [ row, col, distance ] = queue.shift(); // assume this is O(1) time complexity
    const position = row + ',' + col; 
    if (visited.has(position)) continue;
    visited.add(position);
    if (grid[row][col] === 'X') continue;
    if (grid[row][col] === 'C') return distance;
    if (row > 0) queue.push([ row - 1, col, distance + 1 ]);
    if (row < grid.length - 1) queue.push([ row + 1, col, distance + 1 ]);
    if (col > 0) queue.push([ row, col - 1, distance + 1 ]);
    if (col < grid[0].length - 1) queue.push([ row, col + 1, distance + 1 ]);	
  }


  return -1;
};




module.exports = {
  closestCarrot,
};

