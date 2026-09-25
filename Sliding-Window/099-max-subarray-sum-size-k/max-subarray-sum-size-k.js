
// O(n) time and O(1) space
const maxSubarraySumSizeK = (nums, k) => {
  let sum = 0;

  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  let maxSum = sum;

  for (let i = 0; i <= nums.length - k; i++) {
    sum += nums[i + k];
    sum -= nums[i];
    maxSum = Math.max(sum, maxSum);
  }

  return maxSum;
};

// maxSubarraySumSizeK([4, 2, 1, -9, 8, 4, 3], 3); // -> 15
// // [8,4,3] is the subarray of size 3 with the maximal sum

module.exports = {
  maxSubarraySumSizeK,
};
