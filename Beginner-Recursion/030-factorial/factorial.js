// O(n^2) time and O(n^2) space
const factorial = (n) => {
  if (n === 0) return 1;
  return n * factorial(n - 1);
};

module.exports = {
  factorial,
};
