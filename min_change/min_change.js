minChange(8, [1, 5, 4, 12]); // -> 2, because 4+4 is the minimum coins possible
minChange(13, [1, 9, 5, 14, 30]); // -> 5
minChange(23, [2, 5, 7]); // -> 4
minChange(102, [1, 5, 10, 25]); // -> 6
minChange(200, [1, 5, 10, 25]); // -> 8
minChange(2017, [4, 2, 10]); // -> -1
minChange(271, [10, 8, 265, 24]); // -> -1
minChange(0, [4, 2, 10]); // -> 0
minChange(0, []); // -> 0
// O(a * c) time and O(a) space where c is the num of coins and a is the amount
const minChange = (amount, coins) => {
  const minCoinsNeeded = getMinChange(amount, coins);
  return minCoinsNeeded === Infinity ? -1 : minCoinsNeeded;
};


const getMinChange = (amount, coins, memo = {}) => {
  if (amount === 0) return 0;
  if (amount < 0) return Infinity;
  if (amount in memo) return memo[amount];
  
  let minCoins = Infinity;
  for (const coin of coins) {
      const currCoinCount =  1 + getMinChange(amount - coin, coins, memo);
      minCoins = Math.min(currCoinCount, minCoins);
  }


  return memo[amount] = minCoins;
}


/*
amount = 8
      /    \




*/










































// O(ac) time and O(a) space
// const minChange = (amount, coins) => {
//   const answer = getMinChange(amount, coins, {});
  
//   if (answer === Infinity) {
//     return -1;
//   } else {
//     return answer
//   }
// };


// const getMinChange = (amount, coins, memo) => {
//   if (amount === 0) return 0;
//   if (amount in memo) return memo[amount];