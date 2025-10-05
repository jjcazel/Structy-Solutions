// O(n^2) time and O(n^2) space where n is the length of numbers array
const sumNumbersRecursive = (numbers) => {
  if (numbers.length === 0) return 0;
  return numbers[0] + sumNumbersRecursive(numbers.slice(1));
};

module.exports = {
  sumNumbersRecursive,
};


// Write a function sumNumbersRecursive that takes in an array of numbers and returns the sum of all the numbers in the array. All elements will be integers. Solve this recursively.

// sumNumbersRecursive([5, 2, 9, 10]); // -> 26
//
// 5 + 21
// 2 + 19
// 9 + 10
// 10 + sumNumbersRecursive([]) -> 0