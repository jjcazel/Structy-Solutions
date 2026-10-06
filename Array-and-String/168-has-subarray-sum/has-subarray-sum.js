
// O(n) time and O(n) extra space
const hasSubarraySum = (numbers, targetSum) => {
  const seen = new Set ([0]);
  let total = 0;

  for (let num of numbers) {
    total += num;
    const complement = total - targetSum; 
    if (seen.has(complement)) return true;
    seen.add(total);
  }

  return false;
};

//hasSubarraySum([1, 3, 1, 4, 3], 8); // -> true
// seen {0, 1, 4, 5}
// total = 9

module.exports = {
  hasSubarraySum,
};
