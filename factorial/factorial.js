For example, the factorial of 6 is:


6 * 5 * 4 * 3 * 2 * 1 = 720
factorial(3); // -> 6
factorial(6); // -> 720
factorial(18); // -> 6402373705728000
factorial(1); // -> 1
factorial(13); // -> 6227020800
factorial(0); // -> 1
//O(n) time and O(n) space
const factorial = (n) => {
  if (n === 0) return 1;
  if (n === 1) return 1;
  return n * factorial(n - 1);
};


module.exports = {
  factorial,
};

