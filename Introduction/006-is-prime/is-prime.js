// O(sqrt(n)) time and O(1) space where n is the numbers up to the sqrt of n
const isPrime = (n) => {
  if (n < 2) return false;
  for (let num = 2; num <= Math.sqrt(n); num++) {
    if (n % num === 0) return false;
  }

  return true;
};

module.exports = {
  isPrime,
};
