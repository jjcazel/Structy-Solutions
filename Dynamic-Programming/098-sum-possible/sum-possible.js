const sumPossible = (amount, numbers, memo = {}) => {
  if (amount in memo) return memo[amount];
  if (amount === 0) return true;
  if (amount < 0) return false;

  for (let num of numbers) {
    if (num <= amount) {
      if (sumPossible(amount - num, numbers, memo)) memo[amount] = true;
    }
  }

  memo[amount] = false;
  return memo[amount];
};

module.exports = {
  sumPossible,
};
