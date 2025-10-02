// O(n^2) time and O(n^2) space
const sumOfLengths = (strings) => {
  if (strings.length === 0) return 0;
  return strings[0].length + sumOfLengths(strings.slice(1));
};

module.exports = {
  sumOfLengths,
};

// Write a function sumOfLengths that takes in array of strings and returns the total length of the strings.

// You must solve this recursively.

// sumOfLengths(["goat", "cat", "purple"]); // -> 13

// [] = 0, base case
// 4 + 3 + 6
