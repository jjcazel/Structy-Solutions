// O(a*c) time and O(a*c) space where c is coins and a is amount
const minChange = (amount, coins) => {
  const result = _minChange(amount, coins, {});
  return result === Infinity ? -1 : result;
};

const _minChange = (amount, coins, memo) => {
  if (amount === 0) return 0;
  if (amount < 0) return Infinity;
  if (amount in memo) return memo[amount];

  let minNumWays = Infinity;
  for (let coin of coins) {
    const currNumWays = 1 + _minChange(amount - coin, coins, memo);
    minNumWays = Math.min(currNumWays, minNumWays);
  }

  memo[amount] = minNumWays;
  return minNumWays;
}

module.exports = {
  minChange,
};
