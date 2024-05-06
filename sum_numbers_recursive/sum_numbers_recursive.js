sumNumbersRecursive([5, 2, 9, 10]); // -> 26
sumNumbersRecursive([1, -1, 1, -1, 1, -1, 1]); // -> 1
sumNumbersRecursive([]); // -> 0
sumNumbersRecursive([1000, 0, 0, 0, 0, 0, 1]); // -> 1001
sumNumbersRecursive([700, 70, 7]); // -> 777
sumNumbersRecursive([-10, -9, -8, -7, -6, -5, -4, -3, -2, -1]); // -> -55
sumNumbersRecursive([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]); // -> 0
sumNumbersRecursive([123456789, 12345678, 1234567, 123456, 12345, 1234, 123, 12, 1, 0]); // -> 1836311903


// O(n) time and O(n) space n is the length of numbers
const sumNumbersRecursive = (numbers, i = 0) => {
  if (i === numbers.length) return 0;


  return numbers[i] + sumNumbersRecursive(numbers, i + 1);
};


module.exports = {
  sumNumbersRecursive,
};

