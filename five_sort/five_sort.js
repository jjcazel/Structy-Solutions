fiveSort([12, 5, 1, 5, 12, 7]);
// -> [12, 7, 1, 12, 5, 5] 
fiveSort([5, 2, 5, 6, 5, 1, 10, 2, 5, 5]);
// -> [2, 2, 10, 6, 1, 5, 5, 5, 5, 5] 
fiveSort([5, 5, 5, 1, 1, 1, 4]);
// -> [4, 1, 1, 1, 5, 5, 5] 
fiveSort([5, 5, 6, 5, 5, 5, 5]);
// -> [6, 5, 5, 5, 5, 5, 5] 
fiveSort([5, 1, 2, 5, 5, 3, 2, 5, 1, 5, 5, 5, 4, 5]);
// -> [4, 1, 2, 1, 2, 3, 5, 5, 5, 5, 5, 5, 5, 5] 
const fives = new Array(20000).fill(5);
const fours = new Array(20000).fill(4);
const nums = [...fives, ...fours];
fiveSort(nums);
// twenty-thousand 4s followed by twenty-thousand 5s
// -> [4, 4, 4, 4, ..., 5, 5, 5, 5]
//O(n) time and O(n) space where n is the length of nums 
const fiveSort = (nums) => {
  let startIdx = 0, endIdx = nums.length - 1;


  while (startIdx < endIdx) {
    if (nums[endIdx] === 5) { 
      endIdx--;
    } else if (nums[startIdx] === 5) {
      const temp = nums[startIdx];
      nums[startIdx] = nums[endIdx];
      nums[endIdx] = temp;
      startIdx++;
    } else {
      startIdx++;
    }
  }


  return nums; 
};


module.exports = {
  fiveSort,
};

