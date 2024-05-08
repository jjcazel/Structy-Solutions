pairSum([3, 2, 5, 4, 1], 8); // -> [0, 2]
pairSum([4, 7, 9, 2, 5, 1], 5); // -> [0, 5]
pairSum([4, 7, 9, 2, 5, 1], 3); // -> [3, 5]
pairSum([1, 6, 7, 2], 13); // -> [1, 2]
pairSum([9, 9], 18); // -> [0, 1]
pairSum([6, 4, 2, 8 ], 12); // -> [1, 3]
// O(n) time and O(n) space where n is the length of numbers
const pairSum = (numbers, targetSum) => {
  const pairHash = {};


  for (let idx = 0; idx < numbers.length; idx++) {
    const currNum = numbers[idx];
    const diff = targetSum - currNum;
    if (diff in pairHash) {
      return [ idx, pairHash[diff] ];
    }
    pairHash[currNum] = idx;
  }  
};


module.exports = {
  pairSum,
};

