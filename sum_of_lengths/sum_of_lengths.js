sumOfLengths(["goat", "cat", "purple"]); // -> 13
sumOfLengths(["bike", "at", "pencils", "phone"]); // -> 18
sumOfLengths([]); // -> 0
sumOfLengths(["", " ", "  ", "   ", "    ", "     "]); // -> 15
sumOfLengths(["0", "313", "1234567890"]); // -> 14 
//O(n) time and O(n) space
const sumOfLengths = (strings, i = 0) => {
  if (strings.length === i) return 0;
  return strings[i].length + sumOfLengths(strings, i + 1);
};


module.exports = {
  sumOfLengths,
};

