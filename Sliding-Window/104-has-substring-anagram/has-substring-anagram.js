
// O(nk) time and O(k) space, where n is the length of the string and k is the length of the anagram
const hasSubstringAnagram = (s, anagram) => {
  const set = new Set();
  const n = anagram.length;

  for (let char of anagram) {
    set.add(char);
  }

  let count = 0;
  for (let i = 0; i < n; i++) {
    if (set.has(s[i])) count++;
  }
  
  for (let i = 0; i <= s.length - n; i++) {
    if (count === n) return true;
    if (set.has(s[i + n])) count++;
    if (set.has(s[i])) count--;
  }

  return false;
};

// console.log(hasSubstringAnagram("greyhounds", "hoy")); // -> true
// console.log(hasSubstringAnagram("abc", "cba"));  // true: equal lengths
// console.log(hasSubstringAnagram("abcd", "dc")); // true: match in final window
// n = 3
// i = 3
// j = 5
// set = {h, o, y}
// 

// OUTPUT: boolean
// RULES: Does the given anagram exist inany of the fix sized subarrays in the given string? No duplicate characters in either string. The given anagram will be shorter or equal to the size of the string
// INPUT: string and anagram string
// CONSTRAINTS: none known
// APPROACH: This uses fixed-size sliding window so we look at each window starting from index 0 through the anagram's length. check if each character in the anagram is in the current set. As we move the window add and delete from the current window set. This allows us to chec for characters in constant time. If we find an anagram return true or after the loop return false.

module.exports = {
  hasSubstringAnagram,
};
