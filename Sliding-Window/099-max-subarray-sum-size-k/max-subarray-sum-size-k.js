
//O(n) time and O(k) space n is the length of nums and k is the length of each subarray
const maxSubarraySumSizeK = (nums, k) => {
  let currentSum = 0;
  for (let i = 0; i < k; i++) {
    currentSum += nums[i];
  }
  let maxSum = currentSum;

  for (let i = 0; i <= nums.length - k; i++) {
    currentSum += nums[i + k];
    currentSum -= nums[i];
    maxSum = Math.max(currentSum, maxSum);
  }
  
  return maxSum;
};

// maxSubarraySumSizeK([4, 2, 1, -9, 8, 4, 3], 3); // -> 15
// [8,4,3] is the subarray of size 3 with the maximal sum

// maxSum = 7
// currentSum = 0
// i = 1

module.exports = {
  maxSubarraySumSizeK,
};
