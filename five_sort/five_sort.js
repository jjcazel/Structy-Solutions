
//O(n) time and O(1) space where n is the length of nums 
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

