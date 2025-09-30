// O(n + m) time and O(n + m) space where n is the length
const anagrams = (s1, s2) => {
  if (s1.length !== s2.length) return false;
  const charCounts = {};

  for (let char of s1) {
    
    if (!(char in charCounts)) charCounts[char] = 0;
    charCounts[char]++;
  }

  for (let char of s2) {
    charCounts[char]--;
  }

  for (const char in charCounts) {
    console.log('char', char, 'charCounts', charCounts);
    if (charCounts[char] !== 0) return false;
  }

  return true;
};


console.log(anagrams('restful', 'fluster'));

module.exports = {
  anagrams,
};
