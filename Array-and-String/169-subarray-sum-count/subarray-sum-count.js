
// O(n) time and O(n) extra space
const subarraySumCount = (numbers, targetSum) => {
  let sum = 0;
  let subarrayCount = 0;
  const freqMap = {0: 1};

  for (let num of numbers) {
    sum += num;
    const diff = sum - targetSum;
    subarrayCount += freqMap[diff] ?? 0;
    if(!(sum in freqMap)) {
      freqMap[sum] = 0;
    }
    freqMap[sum] += 1;
  }

  return subarrayCount;
};

//subarraySumCount([1, 3, 1, 4, -2, 3], 5);  // -> 3
// freqMap = {1: 1, 4: 1, }
// sum = 5
// count = 0
module.exports = {
  subarraySumCount,
};
