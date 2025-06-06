const pairProduct = (numbers, targetProduct) => {
  const nums = {}; // {3: 0, 2: 1, 5: 2}
  for (let i = 0; i < numbers.length; i++) { // i = 1
    const currNum = numbers[i];
    const divisor = targetProduct / currNum;
    if (divisor in nums) return [nums[divisor], i];
    nums[currNum] = i;
  }
};

module.exports = {
  pairProduct,
};
