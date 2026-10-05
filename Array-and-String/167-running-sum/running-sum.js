
// O(n) time and O(1) extra space. Doing this in place
const runningSum = (numbers) => {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    numbers[i] = sum;
  }

  return numbers;
};

// runningSum([4, 2, 1, 6, 3, 6]); // -> [ 4, 6, 7, 13, 16, 22 ] 
// sum = 6

module.exports = {
  runningSum,
};
