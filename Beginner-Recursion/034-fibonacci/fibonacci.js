// O(2^n) time and O(2^n) space
const fibonacci = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

module.exports = {
  fibonacci,
};

// Write a function, fibonacci, that takes in a number argument, n, and returns the n-th number of the Fibonacci sequence.

// The 0-th number of the sequence is 0.

// The 1-st number of the sequence is 1.

// To generate further numbers of the sequence, calculate the sum of previous two numbers.

// You must solve this recursively.