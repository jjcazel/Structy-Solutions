
// O(n) time and O(1) space
const findSubarraySum = (nums, targetSum) => {
  let currentSum = 0;
  let left = 0;
  
  for (let right = 0; right < nums.length; right++) {
    currentSum += nums[right];
    
    while (left < right && currentSum > targetSum) {
      currentSum -= nums[left];
      left++;
    }
    console.log('currentSum', currentSum);
    if (currentSum === targetSum) return [left, right];
  }
};

// console.log(findSubarraySum([1, 2, 3, 7, 5], 12)); // -> [1,3]
// OUTPUT: indices of subarray
// RULES: sum of nums in subarray have to sum to the target sum. All numbers are positive.
// INPUT: nums array and target sum
// CONSTRAINT: none known
// APPROACH: use a variable size sliding window starting of size 1. if the current sum is less than target sum, increment the right pointer until it hits the target or goes over. If it goes over the target sum, incremenet the left pointer until it hits the target or ges under. If you hit the target return the left and right indices in an array.

module.exports = {
  findSubarraySum,
};
