fibonacci(0); // -> 0
fibonacci(1); // -> 1
fibonacci(2); // -> 1
fibonacci(3); // -> 2
fibonacci(4); // -> 3
fibonacci(5); // -> 5
fibonacci(8); // -> 21
//O(2^n) time and (n) space
const fibonacci = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;


  return fibonacci(n - 2) + fibonacci(n - 1);
};


module.exports = {
  fibonacci,
};

