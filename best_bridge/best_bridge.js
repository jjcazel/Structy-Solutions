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
//O(r * c) time and O(r * c) where r is the num of rows and c is the num of columns
const bestBridge = (grid) => {
  let mainIsland;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      const potenitalLand = exploreIsland(grid, row, col, new Set());
      if (potenitalLand.size > 0) {
        mainIsland = potenitalLand;
      }
    }
  }


  const visited = new Set(mainIsland);
  const queue = [];
  for (const startingPos of mainIsland) {
    const [ row, col ] = startingPos.split(',').map(Number);
    queue.push([ row, col, 0 ]);
  }


  while (queue.length) {
    const [ row, col, distance ] = queue.shift(); //assume this is O(1) lookup
    const neighbors = [
      [row + 1, col], [row - 1, col], [row, col + 1], [row, col - 1]
    ];


    for (let [ r, c ] of neighbors) {
      const pos = r + ',' + c;
      if (isInbounds(grid, r, c)) {
        if (!visited.has(pos)) {
          visited.add(pos);
          if (grid[r][c] === 'L') return distance;
          // Only push to the queue if position hasn't been visited
          queue.push([ r, c, distance + 1 ]);
        }
      }
    }
  }
  // only return in the while loop as we are guarenteed two islands and a path
};


const isInbounds = (grid, row, col) => {
  const rowInbounds = row >= 0 && row < grid.length;
  const colInbounds = col >= 0 && col < grid[0].length;
  return rowInbounds && colInbounds;
}


const exploreIsland = (grid, row, col, visited) => {
  if (!isInbounds(grid, row, col) || grid[row][col] === 'W') return visited;