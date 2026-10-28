
//O(n) time and O(n) space
const compress = (s) => {
  const output = [];
  let count = 0;
  let left = 0;
  let right = 0
  
  while (left <= s.length && right <= s.length) {
    if (s[left] !== s[right]) {
      output.push(count > 1 ? count + s[left] : s[left]);
      left = right;
      count = 0;
    } else {
      right++;
      count++;
    }
  }

  return output.join('');
};

console.log(compress('ccaaatsss')); // -> '2c3at3s'

// OUTPUT: compressed string
// RULES: show the number that represents the consecutive letters along with the letter
// INPUT: string
// CONSTRAINTS: none known
// APPROACH: use two pointers both starting on the first letter. Once we hit a new letter push in the count + that letter to the output array. If count is one don't add the count, just the letter. Once finished return the array joined on an empty string.

module.exports = {
  compress,
};
