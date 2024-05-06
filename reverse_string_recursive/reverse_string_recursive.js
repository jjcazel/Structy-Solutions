reverseString("hello"); // -> "olleh"
reverseString("abcdefg"); // -> "gfedcba"


reverseString("stopwatch"); // -> "hctawpots"
reverseString(""); // -> ""


const reverseString = (s, i = 0) => {
  if (s.length === i) return '';
  return reverseString(s, i + 1) + s[i];
};


module.exports = {
  reverseString,
};

