// O(n) time and O(n) space where n is the length of the string
const mostFrequentChar = (s) => {
  const counts = {};
  
  for (let char of s) {
    if (!(char in counts)) counts[char] = 0;
    counts[char]++;
  }

  let maxChar = '';
  let maxCharCount = 0;
  for (let char in counts) {
    if (counts[char] > maxCharCount) maxChar = char;
  }

  return maxChar;
};

module.exports = {
  mostFrequentChar,
};
