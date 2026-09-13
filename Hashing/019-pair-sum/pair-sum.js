
// O(n) time and O(n) space
const pairSum = (numbers, targetSum) => {
  const numsHash = {};

  for (let i = 0; i < numbers.length; i++) {
    const currNumber = numbers[i];
    const difference = targetSum - currNumber;
    if (!(currNumber in numsHash)) {
      numsHash[currNumber] = i;
    }
    if (difference in numsHash && numsHash[difference] !== i) {
      return [ numsHash[difference], numsHash[currNumber] ];
    }
  }
};

// pairSum([9, 9], 18); // -> [0, 1]
// difference = 9
// currNumber = 9
// { 9: 0, }
module.exports = {
  pairSum,
};
