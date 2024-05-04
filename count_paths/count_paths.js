const grid = [
  ["O", "O"],
  ["O", "O"],
];
countPaths(grid); // -> 2
const grid = [
  ["O", "O", "X"],
  ["O", "O", "O"],
  ["O", "O", "O"],
];
countPaths(grid); // -> 5
const grid = [
  ["O", "O", "O"],
  ["O", "O", "X"],
  ["O", "O", "O"],
];
countPaths(grid); // -> 3
const grid = [
  ["O", "O", "O"],
  ["O", "X", "X"],
  ["O", "O", "O"],
];
countPaths(grid); // -> 1
const grid = [
  ["O", "O", "X", "O", "O", "O"],
  ["O", "O", "X", "O", "O", "O"],
  ["X", "O", "X", "O", "O", "O"],
  ["X", "X", "X", "O", "O", "O"],
  ["O", "O", "O", "O", "O", "O"],
];
countPaths(grid); // -> 0
const grid = [
  ["O", "O", "X", "O", "O", "O"],
  ["O", "O", "O", "O", "O", "X"],
  ["X", "O", "O", "O", "O", "O"],
  ["X", "X", "X", "O", "O", "O"],
  ["O", "O", "O", "O", "O", "O"],
];
countPaths(grid); // -> 42
const grid = [
  ["O", "O", "X", "O", "O", "O"],
  ["O", "O", "O", "O", "O", "X"],
  ["X", "O", "O", "O", "O", "O"],
  ["X", "X", "X", "O", "O", "O"],
  ["O", "O", "O", "O", "O", "X"],
];
countPaths(grid); // -> 0
const grid = [
  ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
];
countPaths(grid); // -> 40116600
const grid = [
  ["O", "O", "X", "X", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O", "O"],
  ["O", "O", "X", "X", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O", "O"],
  ["O", "O", "O", "X", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O", "O"],
  ["X", "O", "O", "O", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O", "O"],
  ["X", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "X", "X", "O"],
  ["O", "O", "O", "O", "O", "O", "O", "X", "O", "O", "O", "O", "O", "X", "O"],
  ["O", "O", "O", "O", "O", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O"],
  ["X", "X", "X", "O", "O", "O", "O", "O", "O", "X", "O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "X", "X", "O", "O", "O", "O", "X", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "X", "X", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O"],
];
countPaths(grid); // -> 3190434
//O(r * c) time and O(r * c) space where r = rows and c = columns
const countPaths = (grid, row = 0, col = 0, memo = {}) => {
  const position = row + ',' + col;
  if (position in memo) return memo[position];
  if (row === grid.length || col === grid[0].length || grid[row][col] === 'X') return 0;
  if (row === grid.length - 1 && col === grid[0].length - 1) return 1;


  const downPath = countPaths(grid, row + 1, col, memo);
  const rightPath = countPaths(grid, row, col + 1, memo);


  memo[position] = downPath + rightPath;
  return downPath + rightPath;
};














































// const grid = [[0]];
// console.log(countPaths(grid)); // -> 2)






//O(nm) time and O(nm) space n = height and m = width of array


// const countPaths = (grid, row = 0, col = 0, memo = {}) => {
//   const position = row + ',' + col;
//   if (position in memo) return memo[position]
//   if (row === grid.length || col === grid[0].length || grid[row][col] === 'X') return 0;
  
//   if (row === grid.length - 1 && col === grid[0].length - 1) return 1;
  
//   memo[position] = countPaths(grid, row + 1, col, memo) + countPaths(grid, row, col + 1, memo);
//   return memo[position];
// };






// //O(nm) time and O(nm) space n = height and m = width of array
// //O(nm) time and O(nm) space n = height and m = width of array
// const IS_WALL = 'X'


// const countPaths = (grid) => {
//   const numWays = grid.map(row => row.map(ele => ele = 0));
//   numWays[0][0] = 1;
  
//   for (let row = 0; row < grid.length; row++) { // 0
//     for (let col = 0; col < grid[0].length; col++) { // 3
//       //set all the first row to 1s if not a wall since there is only one way to get to
//       // these points
//       if (row === 0 && grid[row][col] !== IS_WALL) {
//         numWays[row][col] = 1;
//       } else if (row > 0 && col === 0 && numWays[row - 1][col] === 0) {
//         numWays[row][col] = 0; //set it back to 0 if it is behind a wall
//       }
//       //set all the first column to 1s if not a wall since there is only one way to get to
//       // these points
//       if (col === 0 && row > 0 && grid[row][col] !== IS_WALL && numWays[row - 1][col] !== 0) {
//         numWays[row][col] = 1;
//       } else if (col > 0 && row === 0 && numWays[row][col - 1] === 0) {
//         numWays[row][col] = 0;//set it back to 0 if it is behind a wall
//       }
//       //create the num ways at current position by summing the numWays to the position above
//       // and the num ways to the position to the left.