
//O(n) time and O(1) space
const isPalindrome = (s) => {
  let left = 0;
  let right = s.length - 1;

  while (left <= right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }

  return true;
};

module.exports = {
  isPalindrome,
};
