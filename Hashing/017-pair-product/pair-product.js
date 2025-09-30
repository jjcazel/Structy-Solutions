//O(n) time and O(n) space where n is the length of numbers
const pairProduct = (numbers, targetProduct) => {
  const previous = {}; // {'3': 0, '2': 1, "5": 2, '4': 3, ...}

  for (let i = 0; i < numbers.length; i++) {
    const currNum = numbers[i];
    const currDiff = targetProduct / currNum;
    if (currDiff in previous) return [i, previous[currDiff]];

    previous[currNum] = i;
  }
};

module.exports = {
  pairProduct,
};
