
// O(rc) time and O(rc) space where r = row and c = col
const bestBridge = (grid) => {
  const visited = new Set();
  const firstIsland = [];
  
  for (let row = 0; row < grid.length; row++) {
    let foundLand = false;
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 'L') {
        firstIsland.push(...exploreIsland(row, col, grid, visited));
        foundLand = true;
        break;
      }
    }
    if (foundLand) break;
  }

  const queue = []
  for (let [ startRow, startCol] of firstIsland) {
    queue.push([startRow, startCol, 0]);
  }

  let head = 0;
  while (head < queue.length) {
    const [ row, col, distance ] = queue[head++];
    if (grid[row][col] === 'L' && distance !== 0) return distance - 1;

    if (isInbounds(row - 1, grid.length)) {
      const positionKey = (row - 1) + '-' + col;
      if(!visited.has(positionKey)) {
        queue.push([row - 1, col, distance + 1]);
        visited.add(positionKey);
      }
    }
    if (isInbounds(row + 1, grid.length)) {
      const positionKey = (row + 1) + '-' + col;
      if(!visited.has(positionKey)) {
        queue.push([row + 1, col, distance + 1]);
        visited.add(positionKey);
      }
    }
    if (isInbounds(col - 1, grid[0].length)) {
      const positionKey = (row) + '-' + (col - 1);
      if(!visited.has(positionKey)) {
        queue.push([row, col - 1, distance  + 1]);
        visited.add(positionKey);
      }
    }
    if (isInbounds(col + 1, grid[0].length)) {
      const positionKey = (row) + '-' + (col + 1);
      if(!visited.has(positionKey)) {
        queue.push([row, col + 1, distance  + 1]);
        visited.add(positionKey);
      }
    }
  }
};

const exploreIsland = (row, col, grid, visited) => {
  const positions = [];
  const stack = [ [row, col] ];

  while (stack.length) {
    const [ row, col ] = stack.pop();
    
    if (grid[row][col] === 'W') continue;
    const positionKey = row + '-' + col;
    if (visited.has(positionKey)) continue;
    visited.add(positionKey);
    positions.push([ row, col ]);
    
    if (isInbounds(row - 1, grid.length)) stack.push([row - 1, col]);
    if (isInbounds(row + 1, grid.length)) stack.push([row + 1, col]);
    if (isInbounds(col - 1, grid[0].length)) stack.push([row, col - 1]);
    if (isInbounds(col + 1, grid[0].length)) stack.push([row, col + 1]);
  }

  return positions;
}

const isInbounds = (cell, length) => {
  return 0 <= cell && cell < length;
}

// RETURN: shortest path from one island to the next
// RULES: W = ater and L = land, only two "islands"
// INPUT: grid graph
// CONSTRAINT:
// APPROACH: nested loops to find the first island and explore it with (DFS). Then from every point in that island start a BFS while tracking the distance until you hit the next island. Return distance - 1.

module.exports = {
  bestBridge,
};
