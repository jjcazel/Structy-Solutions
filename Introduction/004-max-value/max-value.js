//O(n) time and O(1) space where n is the length of nums
const maxValue = (nums) => {
  let maxNum = nums[0];
  for (let num of nums) {
    if (num > maxNum) maxNum = num;
  }

  return maxNum;
};

module.exports = {
  maxValue,
};
