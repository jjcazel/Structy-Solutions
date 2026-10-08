
// O(n) time and O(1) space
const subarrayTargetSumSizeK = (nums, target, k) => {
  let sum = 0;
  let count = 0;
  for (let i = 0; i < k; i++){
    sum += nums[i];
  }

  for (let i = 0; i <= nums.length - k; i++) {
    sum -= nums[i];
    sum += nums[i + k];
    
    if (sum === target) count++;
  }

  return count;
};

// RETURN: number of subarrays that sum to target num
// RULES: must be fixed size window of size k
// INPUT: array of numbers, target sum, size k
// CONSTRAINT: up to 50,000 numbers
// APPROACH: used fixed size window approach by adding one number to the sum on the right and subtracting one from the left on each iteration

// subarrayTargetSumSizeK([2, 3, 2, 2, 3, 1, 3, 8, 5, 0, 2, 4], 7, 3); // -> 5
// sum = 7
// count = 2

module.exports = {
  subarrayTargetSumSizeK,
};
