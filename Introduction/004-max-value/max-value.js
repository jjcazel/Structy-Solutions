// O(n) time and O(1) space, worst case O(n)
const maxValue = (nums) => {
  let maxNum = -Infinity;
  for (let num of nums) {
    if (num > maxNum) {
      maxNum = num;
    }
  }

  return maxNum;
};

module.exports = {
  maxValue,
};
