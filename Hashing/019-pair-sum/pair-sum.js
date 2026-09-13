
// O(n) time and O(n) space where n is the length of the array
const pairSum = (numbers, targetSum) => {
  const previous = {};

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    const difference = targetSum - number;
    if (difference in previous) {
      return [ previous[difference], i ];
    }

    previous[number] = i;
  }
};

module.exports = {
  pairSum,
};
