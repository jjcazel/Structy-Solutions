knightAttack(8, 1, 1, 2, 2); // -> 2
knightAttack(8, 1, 1, 2, 3); // -> 1
knightAttack(8, 0, 3, 4, 2); // -> 3
knightAttack(8, 0, 3, 5, 2); // -> 4
knightAttack(24, 4, 7, 19, 20); // -> 10
knightAttack(100, 21, 10, 0, 0); // -> 11
knightAttack(3, 0, 0, 1, 2); // -> 1
knightAttack(3, 0, 0, 1, 1); // -> null
const knightAttack = (n, kr, kc, pr, pc) => {
  const visited = new Set();
  const queue = [ [kr, kc, 0] ];


  while (queue.length) {
    const [ row, col, distance ] = queue.shift(); //assume its O(1)
    if (row === pr && col === pc) return distance;


    const position = row + "," + col;
    if (visited.has(position)) continue;
    visited.add(position);


    const knightDeltas = [
      [row + 2, col + 1], 
      [row + 2, col - 1], 
      [row - 2, col + 1], 
      [row - 2, col - 1], 
      [row + 1, col + 2], 
      [row - 1, col + 2], 
      [row + 1, col - 2], 
      [row - 1, col - 2]
    ];


    for (const [ row, col ] of knightDeltas) {
      if (row >= 0 && row < n && col >= 0 && col < n) {
        queue.push([ row, col, distance + 1 ]);
      }
    }
  }


  return null;
};


module.exports = {
  knightAttack,
};

