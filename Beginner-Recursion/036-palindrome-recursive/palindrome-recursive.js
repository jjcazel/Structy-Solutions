// O(n^2) time and O(n^2) space
const palindrome = (s) => {
  if (s.length < 1) return true;
  if (s[0] !== s[s.length - 1]) return false;
  return palindrome(s.slice(1, -1));
};

module.exports = {
  palindrome,
};
