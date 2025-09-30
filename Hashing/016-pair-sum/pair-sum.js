//O(n) time and O(n) space where n is the length of the numbers array
const pairSum = (numbers, targetSum) => {
  const indices = {};

  for (let num = 0; num < numbers.length; num++) {
    const currNum = numbers[num];
    if (!(currNum in indices)) indices[currNum] = num;
  }
  
  for (let num = 0; num < numbers.length; num++) {
    const currDiff = targetSum - numbers[num]; 
    if (currDiff in indices && num !== indices[currDiff]) return [ num, indices[currDiff] ];
  } 
};


module.exports = {
  pairSum,
};
