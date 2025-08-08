// O(n + m) time and O(n + m) space
const anagrams = (s1, s2) => {
  if (s1.length !== s2.length) return false;
  
  const seenChars = {}; // {'t':}
  for (let char of s1) {
    if (!seenChars[char]) {
      seenChars[char] = 0; 
    }
    seenChars[char]++;
  }

  for (let char2 of s2) {
    if (!seenChars[char2] || seenChars[char2] === 0) return false;
    seenChars[char2]--;
  }

  return true;
};


module.exports = {
  anagrams,
};
