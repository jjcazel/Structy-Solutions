// O(n) time and O(n) space
const tribonacci = (n) => {
  const memo = {};
  if (n === 0) return 0;
  if (n === 1) return 0;
  if (n === 2) return 1;
  
  if (!memo[n]) {
    memo[n] = tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
  }

  return memo[n];
};

module.exports = {
  tribonacci,
};
