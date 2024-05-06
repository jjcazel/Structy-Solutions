knightlyNumber(8, 2, 4, 4, 5, 5); // -> 2
knightlyNumber(8, 2, 7, 1, 7, 1); // -> 3
knightlyNumber(8, 2, 5, 4, 5, 4); // -> 8
knightlyNumber(8, 3, 5, 2, 4, 4); // -> 21
knightlyNumber(20, 6, 18, 7, 10, 15); // -> 60
knightlyNumber(20, 12, 8, 3, 9, 14); // -> 98410127
knightlyNumber(8, 2, 0, 0, 1, 1); // -> 0
//O(m * n * n) time and O(m * n * n) space where m is the num of moves and n is the lenght and width of the board
const knightlyNumber = (n, m, kr, kc, pr, pc, memo = {}) => {
  const key = kr + ',' + kc + ',' + m;
  if (key in memo) return memo[key];
  if (m === 0) {
    if (kr === pr && kc === pc) {
      return 1;
    } else {
      return 0;
    }
  } 


  const knightDeltas = [
      [kr + 2, kc + 1], 
      [kr + 2, kc - 1], 
      [kr - 2, kc + 1], 
      [kr - 2, kc - 1], 
      [kr + 1, kc + 2], 
      [kr - 1, kc + 2], 
      [kr + 1, kc - 2], 
      [kr - 1, kc - 2]
    ];


  let numWays = 0;
  for (const [row, col] of knightDeltas) {
    if (row >= 0 && row < n && col >= 0 && col < n) {
      numWays += knightlyNumber(n, m - 1, row, col, pr, pc, memo);
    }
  }


  memo[key] = numWays;
  return numWays;
};


module.exports = {
  knightlyNumber
};

