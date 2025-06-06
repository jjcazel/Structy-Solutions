// O(n) time and O(n) space
const mostFrequentChar = (s) => {
  const chars = {};
  for (let char of s) {
    if (!(char in s)) {
      chars[char] = 0;
    }
    chars[char]++;
  }

  let maxCount = -Infinity;
  for (const char in chars) {
    if (chars[char] > maxCount) {
      maxCount = chars[char];
    }
  }

  for (const char in chars) {
    if (chars[char] === maxCount) return char;
  }
};

module.exports = {
  mostFrequentChar,
};
