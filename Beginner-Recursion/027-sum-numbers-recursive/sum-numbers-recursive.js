const sumNumbersRecursive = (numbers) => {
  let sum = 0;
  return recursiveHelper(numbers, sum);
};

const recursiveHelper = (numbers, sum) => {
  if (!numbers.length) return 0;
  sum += numbers.pop();
  return sum + sumNumbersRecursive(numbers);
}

module.exports = {
  sumNumbersRecursive,
};
