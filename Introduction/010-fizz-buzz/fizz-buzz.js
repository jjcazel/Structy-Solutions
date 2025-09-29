// O(n) time and O(n) space where n is input num
const fizzBuzz = (n) => {
  const fizzBuzzArr = [];
  for (let num = 1; num <= n; num++) {
    if (num % 3 === 0 && num % 5 === 0) {
      fizzBuzzArr.push('fizzbuzz');
    } else if (num % 3 === 0) {
      fizzBuzzArr.push('fizz');
    } else if (num % 5 === 0) {
      fizzBuzzArr.push('buzz');
    } else {
      fizzBuzzArr.push(num);
    }
  }

  return fizzBuzzArr;
};

module.exports = {
  fizzBuzz,
};
