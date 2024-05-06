reverseString("hello"); // -> "olleh"
reverseString("abcdefg"); // -> "gfedcba"


reverseString("stopwatch"); // -> "hctawpots"
reverseString(""); // -> ""


const reverseString = (s) => {
  if (s.length === 0) return '';
  return reverseString(s.slice(1)) + s[0];
};


module.exports = {
  reverseString,
};

