
// O(n^2) time and O(n) space
const sumNumbersRecursive = (numbers) => {
  if (numbers.length === 0) return 0;
  return numbers[0] + sumNumbersRecursive(numbers.slice(1));
};

module.exports = {
  sumNumbersRecursive,
};
