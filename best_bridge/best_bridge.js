//O(rc) time and O(rc) space where r is the num of rows and c is the num of cols
const bestBridge = (grid) => {
  let mainIsland;
  for (let row = 0; row < grid.length; row++) { // 0
    for (let col = 0; col < grid[0].length; col++) { // 0
      const potentialIsland = dfs(grid, row, col, new Set()); //return all the coordinates of the first island in a set
      if (potentialIsland.size > 0) {
        mainIsland = potentialIsland;
      }
    }
  }


  const bfsVisited = new Set(mainIsland);
  const queue = [];
  for (const startingPosition of mainIsland) {
    const [ row, col ] = startingPosition.split(',').map(Number);
    queue.push([ row, col, 0 ]);
  }


  while (queue.length) {
    const [row, col, distance] = queue.shift();
    const neighbors = [
      [row + 1, col], [row - 1, col], [row, col + 1], [row, col - 1]
    ];
    for (let [r, c] of neighbors) {
      const pos = r + ',' + c;
      if (r >= 0 && r < grid.length && c >= 0 && c < grid[0].length) {
        if (!bfsVisited.has(pos)) {
          bfsVisited.add(pos);
          if (grid[r][c] === 'L') {
            return distance; // Return the distance when reaching any part of the second island
          }
          queue.push([r, c, distance + 1]);
        }
      }
    }
  }
};


const dfs = (grid, row, col, visited) => {
  const rowInbounds = row >= 0 && row < grid.length;
  const colInbounds = col >= 0 && col < grid[0].length;
  if (!rowInbounds || !colInbounds) return visited;


  if (grid[row][col] === 'W') return visited;
  
  const position = row + ',' + col;
  if (visited.has(position)) return visited;
  visited.add(position);


  dfs(grid, row + 1, col, visited);
  dfs(grid, row - 1, col, visited);
  dfs(grid, row, col + 1 , visited);
  dfs(grid, row, col - 1, visited);


  return visited;
}




module.exports = {
  bestBridge,
};

