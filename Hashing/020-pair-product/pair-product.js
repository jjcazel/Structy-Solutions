// O(n) time and O(n) space where n = numbers.length
const pairProduct = (numbers, targetProduct) => {
  const previousNums = {};

  for (let i = 0; i < numbers.length; i++) {
    const dividend = targetProduct / numbers[i];
    if (dividend in previousNums) return [previousNums[dividend], i];

    previousNums[numbers[i]] = i;
  }
};

module.exports = {
  pairProduct,
};
