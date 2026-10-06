
// O(n) time and O(n) extra space
const subarraySumCount = (numbers, targetSum) => {
  const prefixes = [0];
  let total = 0;
  for (let num of numbers) {
    total += num;
    prefixes.push(total);
  }

  const seen = {};
  let count = 0;
  for (let num of prefixes) {
    const complement = num - targetSum;
    if (complement in seen) {
      count += seen[complement];
    }
    if (!(num in seen)) {
      seen[num] = 0;
    }
    seen[num]++;
  }

  return count;
};

module.exports = {
  subarraySumCount,
};
