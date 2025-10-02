// O(n^2) time and O(n^2) space where n is num of characters in s
const reverseString = (s) => {
  if (s.length === 0) return '';
  return reverseString(s.slice(1)) + s[0];
};

module.exports = {
  reverseString,
};

// Write a function, reverseString, that takes in a string as an argument. The function should return the string with its characters in reverse order. You must do this recursively.

// reverseString("hello"); // -> "olleh"
// '' return 
// 'olleh'
// 
// 
// 
//
// ''