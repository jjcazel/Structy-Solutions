sumOfLengths(["goat", "cat", "purple"]); // -> 13
sumOfLengths(["bike", "at", "pencils", "phone"]); // -> 18
sumOfLengths([]); // -> 0
sumOfLengths(["", " ", "  ", "   ", "    ", "     "]); // -> 15
sumOfLengths(["0", "313", "1234567890"]); // -> 14 
//O(n) time and O(n) space
const sumOfLengths = (strings) => {
  if (strings.length === 0) return 0;
  return strings.pop().length + sumOfLengths(strings);
};


module.exports = {
  sumOfLengths,
};

