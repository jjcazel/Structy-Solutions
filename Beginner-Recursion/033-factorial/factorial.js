// O(n) time and O(n) space 
const factorial = (n) => {
  if (n < 0) return -1;
  if (n === 0) return 1;
  return n * factorial(n - 1);
};

module.exports = {
  factorial,
};
