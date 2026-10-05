
// O(n) time and O(n) extra space
const hasSubarraySum = (numbers, targetSum) => {
  const seen = new Set(0);
  let total = 0;
  for (let num of numbers) {
    total += num; // add
    const complement = total - targetSum;
    if (seen.has(complement)) return true;
    seen.add(total);
  }

  return false; 
};

module.exports = {
  hasSubarraySum,
};
