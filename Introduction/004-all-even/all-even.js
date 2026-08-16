// big O(n) time and space
const allEven = (nums) => {
  for (const num of nums) {
    if (num % 2 + 0 !== 0) {
      return false;
    }
  }

  return true;
};

module.exports = {
  allEven,
};

// allEven([2, 3, 555, 0 ,-3, -100]) => false
// allEven([0, 222, -24, 1,000,000]) => true

// Brute force is O(n) time and O(n) space
// loop through the input
// use the modulo operator to determine is the remainder of modulo 2 is 0 which means it's even
// return false as soon as we find a non-zero modulo output
// if we exit the loop w/o returning false, then return true