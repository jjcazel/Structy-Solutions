// O(n) time and O(n) space
const pairSum = (numbers, targetSum) => {
  const nums = {};
  for (let i = 0; i < numbers.length; i++) {
    const currNum = numbers[i]
    if (!(currNum in nums)) nums[currNum] = i;
  }

  for (let j = 1; j < numbers.length; j++) {
    const diff = targetSum - numbers[j];
    if (diff in nums) {
      return [nums[diff], j];
    }
  }
};

module.exports = {
  pairSum,
};
