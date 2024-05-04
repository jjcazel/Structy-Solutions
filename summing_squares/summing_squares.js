Given 12:


summingSquares(12) -> 3


The minimum squares required for 12 is three, by doing 4 + 4 + 4.


Another way to make 12 is 9 + 1 + 1 + 1, but that requires four perfect squares.
summingSquares(8); // -> 2
summingSquares(9); // -> 1
summingSquares(12); // -> 3
summingSquares(1); // -> 1
summingSquares(31); // -> 4
summingSquares(50); // -> 2
summingSquares(68); // -> 2
summingSquares(87); // -> 4
// O(n * sqrt(n)) time and O(n) space where n is the input target
const summingSquares = (n, memo = {}) => {
  if (n in memo) return memo[n]
  if (n === 0) return 0;


  let minSquares = Infinity;
  for (let num = 1; num <= Math.sqrt(n); num++) {
    const square = num * num;
    const numSquares = 1 + summingSquares(n - square, memo);
    minSquares = Math.min(numSquares, minSquares);
  }


  memo[n] = minSquares;
  return minSquares;
};
























































// const summingSquares = (n, memo = {}) => {
//   if (n in memo) return memo[n];
//   if (n === 0) return 0;