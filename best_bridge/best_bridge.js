const grid = [
  ["W", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "L"],
  ["L", "L", "L", "W", "L"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "W", "W"],
  ["W", "W", "W", "W", "W"],
];
bestBridge(grid); // -> 1
const grid = [
  ["W", "W", "W", "W", "W"],
  ["W", "W", "W", "W", "W"],
  ["L", "L", "W", "W", "L"],
  ["W", "L", "W", "W", "L"],
  ["W", "W", "W", "L", "L"],
  ["W", "W", "W", "W", "W"],
];
bestBridge(grid); // -> 2
const grid = [
  ["W", "W", "W", "W", "W"],
  ["W", "W", "W", "L", "W"],
  ["L", "W", "W", "W", "W"],
];
bestBridge(grid); // -> 3
const grid = [
  ["W", "W", "W", "W", "W", "W", "W", "W"],
  ["W", "W", "W", "W", "W", "W", "W", "W"],
  ["W", "W", "W", "W", "W", "W", "W", "W"],
  ["W", "W", "W", "W", "W", "L", "W", "W"],
  ["W", "W", "W", "W", "L", "L", "W", "W"],
  ["W", "W", "W", "W", "L", "L", "L", "W"],
  ["W", "W", "W", "W", "W", "L", "L", "L"],
  ["L", "W", "W", "W", "W", "L", "L", "L"],
  ["L", "L", "L", "W", "W", "W", "W", "W"],
  ["W", "W", "W", "W", "W", "W", "W", "W"],
];
bestBridge(grid); // -> 3
const grid = [
  ["L", "L", "L", "L", "L", "L", "L", "L"],
  ["L", "W", "W", "W", "W", "W", "W", "L"],
  ["L", "W", "W", "W", "W", "W", "W", "L"],
  ["L", "W", "W", "W", "W", "W", "W", "L"],
  ["L", "W", "W", "W", "W", "W", "W", "L"],
  ["L", "W", "W", "W", "W", "W", "W", "L"],
  ["L", "W", "W", "L", "W", "W", "W", "L"],
  ["L", "W", "W", "W", "W", "W", "W", "L"],
  ["L", "W", "W", "W", "W", "W", "W", "L"],
  ["L", "W", "W", "W", "W", "W", "W", "L"],
  ["L", "W", "W", "W", "W", "W", "W", "L"],
  ["L", "L", "L", "L", "L", "L", "L", "L"],
];
bestBridge(grid); // -> 2
const grid = [
  ["W", "L", "W", "W", "W", "W", "W", "W"],
  ["W", "L", "W", "W", "W", "W", "W", "W"],
  ["W", "W", "W", "W", "W", "W", "W", "W"],
  ["W", "W", "W", "W", "W", "W", "W", "W"],
  ["W", "W", "W", "W", "W", "W", "W", "W"],
  ["W", "W", "W", "W", "W", "W", "L", "W"],
  ["W", "W", "W", "W", "W", "W", "L", "L"],
  ["W", "W", "W", "W", "W", "W", "W", "L"],
];
bestBridge(grid); // -> 8
// O(r * c) time and O (r * c) space where r = rows and c = cols
const bestBridge = (grid) => {
  let mainIslandPoints;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      let potentialIsland = traverseIsland(grid, row, col, new Set());
      if (potentialIsland.size > 0) {
        mainIslandPoints = potentialIsland;
      }
    }
  }
  
  const visited = new Set(mainIslandPoints);
  const queue = [];
  for (const startingPos of mainIslandPoints) {
    const [ row, col ] = startingPos.split(',').map(Number);
    queue.push([ row, col, 0 ]);
  }


  while (queue.length) {
    const [ row, col, distance ] = queue.shift(); // assume this is O(1)


    const neighbors = [
      [row + 1, col],
      [row - 1, col],
      [row, col + 1],
      [row, col - 1]
    ]


    for (const [ row, col ] of neighbors) {
      if (isInbounds(grid, row, col)) {
        const position = row + ',' + col;
        if (!visited.has(position)) {
          if (grid[row][col] === 'L') return distance;
          queue.push([ row, col, distance + 1 ]);
        }
      }
    }
  }
};


const isInbounds = (grid, row, col) => {
  const rowInbounds = row >= 0 && row < grid.length;
  const colInbounds = col >= 0 && col < grid[0].length;
  return rowInbounds && colInbounds;
}


const traverseIsland = (grid, row, col, visited) => {
  if (!isInbounds(grid, row, col) || grid[row][col] === 'W') return visited;


  const position = row + ',' + col;
  if (visited.has(position)) return visited;
  visited.add(position);


  traverseIsland(grid, row + 1, col, visited);
  traverseIsland(grid, row - 1, col, visited);
  traverseIsland(grid, row, col + 1, visited);
  traverseIsland(grid, row, col - 1, visited);


  return visited;
}


module.exports = {
  bestBridge,
};

