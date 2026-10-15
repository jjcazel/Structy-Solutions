
// O(n * m) time and O(n * m) space
const uncompress = (s) => {
  let i = 0;
  let j = 0;
  const nums = '0123456789';
  const result = [];

  while (i < s.length && j < s.length) {
    while (nums.includes(s[j])) {
      j++;
    }
    const currNum = Number(s.slice(i, j));

    let count = 0;
    while (count < currNum) {
      output.push(s[j]);
      count++;
    }
    j++;
    i = j;
  }

  return result.join('');
};

// RETURN: a string uncompressed
// RULES: Each number tells you how many of that character should be printed
// INPUT: string
// CONSTRAINTS: 
// APPROACH: use two pointers to track where the multi-digit numbers are in the string. Turn that string number to a number and print the given character that many times into the output.

module.exports = {
  uncompress,
};
