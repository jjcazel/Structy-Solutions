//O(n^2) time and O(n^2) space where n = num of rows and columns
const knightAttack = (n, kr, kc, pr, pc) => {
  const visited = new Set();
  const queue = [ [kr, kc, 0] ];


  while (queue.length) {
    const [ kRow, kCol, numOfMoves ] = queue.shift(); // assume this is O(1)
    if (kRow === pr && kCol === pc) return numOfMoves;


    const position = kRow + ',' + kCol;
    if (visited.has(position)) continue;
    visited.add(position);


    const knightDeltas = [
      [kRow + 2, kCol + 1], 
      [kRow + 2, kCol - 1], 
      [kRow - 2, kCol + 1], 
      [kRow - 2, kCol - 1], 
      [kRow + 1, kCol + 2], 
      [kRow - 1, kCol + 2], 
      [kRow + 1, kCol - 2], 
      [kRow - 1, kCol - 2]
    ];


    for (const neighbor of knightDeltas) {
      const [row, col] = neighbor;
      const rowInbounds = row >= 0 && row < n;
      const colInbounds = col >= 0 && col < n;
      if (!rowInbounds || !colInbounds) continue;
      queue.push([ row, col, numOfMoves + 1 ]);
    }
  }


  return null;
};


module.exports = {
  knightAttack,
};

