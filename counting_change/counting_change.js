For example,


countingChange(4, [1,2,3]) -> 4


There are four different ways to make an amount of 4:


1. 1 + 1 + 1 + 1
2. 1 + 1 + 2
3. 1 + 3
4. 2 + 2
countingChange(4, [1, 2, 3]); // -> 4
countingChange(8, [1, 2, 3]); // -> 10
countingChange(24, [5, 7, 3]); // -> 5
countingChange(13, [2, 6, 12, 10]); // -> 0
countingChange(512, [1, 5, 10, 25]); // -> 20119
countingChange(1000, [1, 5, 10, 25]); // -> 142511
countingChange(240, [1, 2, 3, 4, 5, 6, 7, 8, 9]); // -> 1525987916
// O(a * c) time and O(a * c) space
const countingChange = (amount, coins, i = 0, memo = {}) => {
  const key = amount + ',' + i;
  if (key in memo) return memo[key];
  if (amount === 0) return 1;


  let coin = coins[i];
  let totalNumWays = 0;
  for (let qty = 0; qty * coin <= amount; qty++) {
    const remainder = amount - (qty * coin);
    totalNumWays += countingChange(remainder, coins, i + 1, memo);
  }


  memo[key] = totalNumWays;
  return totalNumWays;
};
























































// const countingChange = (amount, coins) => {
//   const numWays = new Array(amount + 1).fill(0);
//   numWays[0] = 1;
  
//   for (const coin of coins) {
//     for (let currAmount = 1; currAmount <= amount; currAmount++) {
//       if (coin <= currAmount) {
//         numWays[currAmount] += numWays[currAmount - coin]
//       }
//     }
//   }
  
//   return numWays[amount];
// };








// const countingChange = (amount, coins, i = 0, memo = {}) => {
//   const key = i + ',' + amount;
//   if (key in memo) return memo[key]