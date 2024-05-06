sumOfLengths(["goat", "cat", "purple"]); // -> 13
sumOfLengths(["bike", "at", "pencils", "phone"]); // -> 18
sumOfLengths([]); // -> 0
sumOfLengths(["", " ", "  ", "   ", "    ", "     "]); // -> 15
sumOfLengths(["0", "313", "1234567890"]); // -> 14 
//O(n^2) time and O(n^2) space
const sumOfLengths = (strings, i = 0) => {
  if (strings.length === i) return 0;
  return strings[0].length + sumOfLengths(strings.slice(1));
};


module.exports = {
  sumOfLengths,
};

