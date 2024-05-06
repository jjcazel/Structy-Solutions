palindrome("pop"); // -> true
palindrome("kayak"); // -> true
palindrome("pops"); // -> false
palindrome("boot"); // -> false
palindrome("rotator"); // -> true
palindrome("abcbca"); // -> false
palindrome(""); // -> true
//O(n) time and O(n) space
const palindrome = (s, start = 0, end = s.length - 1) => {
  if (start === end) return true;
  if (s.length === 0) return true;


  if (s[start] !== s[end]) return false;
  return palindrome(s, start + 1, end - 1);
};


module.exports = {
  palindrome,
};

