
// O(n) time and O(1) space
const findSubarraySum = (nums, targetSum) => {
  const sums = {0: -1};
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    const difference = sum - targetSum;

    if (difference in sums) return [ sums[difference] + 1, i ];
    
    sums[sum] = i;
  }

  return null;
};

console.log(findSubarraySum([4, -1], 3));

// APPROACH: create prefix sums hash table. 

module.exports = {
  findSubarraySum,
};
