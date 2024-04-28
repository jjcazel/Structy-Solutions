//O(r * c) time and O(r * c) space where r is the rows and c is the columns
const minimumIsland = (grid) => {
  const visited = new Set();
  let minCount = Infinity;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 'L') {
        let currCount = countIsland(grid, row, col, visited);
        if (currCount < minCount && currCount !== 0) minCount = currCount;
      }
    }
  }

  return minCount;
}

const countIsland = (grid, row, col, visited) => {
  const rowInbounds = row >= 0 && row < grid.length;
  const colInbounds = col >= 0 && col < grid[0].length;
  if (!rowInbounds || !colInbounds) return 0;

  const position = row + ',' + col;
  if (visited.has(position)) return 0;
  visited.add(position);

  if (grid[row][col] === 'W') return 0;

  let size = 1;
  size += countIsland(grid, row + 1, col, visited);
  size += countIsland(grid, row - 1, col, visited);
  size += countIsland(grid, row, col + 1, visited);
  size += countIsland(grid, row, col - 1, visited);

  return size;
}




























// 1.25.23 
// O(wh) time and O(wh) space. Where w is width and h is height
// const minimumIsland = (grid) => {
//   let minIslandSize = Infinity;
//   const seen = new Set(); // {'01' }
//   for (let row = 0; row < grid.length; row++) { // 0
//     for (let col = 0; col < grid[0].length; col++){ // 1
//       const currentIslandSize = explore(row, col, seen, grid);
//       if ((currentIslandSize < minIslandSize) && currentIslandSize !== 0) {
//         minIslandSize = currentIslandSize;
//       }
//     }
//   }
  
//   return minIslandSize;
// }

// function explore(row, col, seen, grid) {
//   const rowInbounds = row >= 0 && row < grid.length;
//   const colInbounds = col >= 0 && col < grid[0].length;
//   const key = row + '' + col; 
  
//   if (!rowInbounds || !colInbounds) return 0;
//   if (grid[row][col] === 'W') return 0;
//   if (seen.has(key)) return 0;
//   seen.add(key);
  
//   let currentIslandSize = 1;
//   currentIslandSize += explore(row + 1, col, seen, grid);
//   currentIslandSize += explore(row, col + 1, seen, grid);
//   currentIslandSize += explore(row - 1, col, seen, grid);
//   currentIslandSize += explore(row, col - 1, seen, grid);
  
//   return currentIslandSize;
// }










// O (nm) time and O(nm) space


// const minimumIsland = (grid) => {
//   const visited = new Set(); // [ '0,0',  ]
//   let minIslandSize = Infinity;
//   for (let row = 0; row < grid.length; row++) { // 0
//     for (let col = 0; col < grid[0].length; col++) { // 0
//       let currentIslandSize = explore(grid, visited, row, col);
//       if (currentIslandSize > 0 && currentIslandSize < minIslandSize) {
//         minIslandSize = currentIslandSize;
//       };
//     }
//   }
  
//   return minIslandSize;
// };


// const explore = (grid, visited, row, col) => {
//   const rowInbounds = 0 <= row && row < grid.length;
//   const colInbounds = 0 <= col && col < grid[0].length;
//   if (!rowInbounds || !colInbounds) return 0;
  
//   if (grid[row][col] === 'W') return 0;
  
//   const position = row + ',' + col; 
//   if (visited.has(position)) return 0;
//   visited.add(position);
  
//   let size = 1;
//   size += explore(grid, visited, row - 1, col);
//   size += explore(grid, visited, row + 1, col);
//   size += explore(grid, visited, row, col - 1);
//   size += explore(grid, visited, row, col + 1); 
  
//   return size;
// }


module.exports = {
  minimumIsland,
};

