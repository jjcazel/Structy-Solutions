For example, given:


    idx =  0  1  2  3  4  5
numbers = [2, 4, 2, 0, 0, 1]


The answer is true.
We start at idx 0, we could take 1 step or 2 steps forward.
The correct choice is to take 1 step to idx 1.
Then take 4 steps forward to the end at idx 5.
arrayStepper([2, 4, 2, 0, 0, 1]); // -> true
arrayStepper([2, 3, 2, 0, 0, 1]); // -> false
arrayStepper([3, 1, 3, 1, 0, 1]); // -> true
arrayStepper([4, 1, 5, 1, 1, 1, 0, 4]); // -> true
arrayStepper([4, 1, 2, 1, 1, 1, 0, 4]); // -> false
arrayStepper([1, 1, 1, 1, 1, 0]); // -> true
arrayStepper([1, 1, 1, 1, 0, 0]); // -> false
arrayStepper([ 
  31, 30, 29, 28, 27,
  26, 25, 24, 23, 22,
  21, 20, 19, 18, 17,
  16, 15, 14, 13, 12,
  11, 10, 9, 8, 7, 6,
  5, 3, 2, 1, 0, 0, 0
]); // -> false
const arrayStepper = (nums, i = 0, memo = {}) => {
  if (i in memo) return memo[i];
  if (i >= nums.length - 1) return true;
  
  const maxSteps = nums[i];
  for (let step = 1; step <= maxSteps; step++) {
    if (arrayStepper(nums, i + step, memo) === true) {
      memo[i] = true;
      return true;
    }
  }


  memo[i] = false;
  return false;
};


module.exports = {
  arrayStepper,
};

