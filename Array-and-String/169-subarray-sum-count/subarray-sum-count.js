
// O(n) time and O(n) extra space
const subarraySumCount = (numbers, targetSum) => {
  const prefixSums = [0];
  let total = 0;
  for (let num of numbers) {
    total += num;
    prefixSums.push(total);
  }

  const seen = {};
  let count = 0;
  for (let prefixSum of prefixSums) {
    const complement = prefixSum - targetSum;
    if (seen[complement]) {
      count += seen[complement];
    }
    if (!(prefixSum in seen)) {
      seen[prefixSum] = 0;
    }
    seen[prefixSum] += 1;
  }

  return count;
};

// first build the prefixSums array, starting with 0, to know what the current sum is at any given index in my array
// keep a hash map to track what sums I've seen from the prefixSums array
// the complement will be the current prefix sum - targetsum
// if its in the hash table add it's number of occurances to the total count
// add the prefix sum to the hash table or increment its frequency if already there
// then return count after getting through all the prefix sums...

module.exports = {
  subarraySumCount,
};
