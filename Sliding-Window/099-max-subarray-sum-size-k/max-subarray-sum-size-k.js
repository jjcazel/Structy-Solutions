
// O(n) time and O(1) space where n is the length of num
const maxSubarraySumSizeK = (nums, k) => {
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }
  let maxSum = sum;

  for (let i = 0; i < nums.length - k; i++) {
    sum += nums[i + k];
    sum -= nums[i];
    maxSum = Math.max(sum, maxSum);
  }

  return maxSum;
};

module.exports = {
  maxSubarraySumSizeK,
};
