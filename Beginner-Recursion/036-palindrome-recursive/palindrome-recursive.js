
//O(n^2) time and O(n) space
const palindrome = (s) => {
  if (s.length < 2) return true;
  if (s[0] !== s[s.length - 1]) return false;
  return palindrome(s.slice(1, s.length - 1));
};

module.exports = {
  palindrome,
};
