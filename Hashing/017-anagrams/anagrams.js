// O(n + m) time and O(n) space where n = s1.length and m = s2.length
const anagrams = (s1, s2) => {
  if (s1.length !== s2.length) return false;
  const s1FreqMap = createFreqMap(s1);

  for (const char2 of s2) {
    if (!(char2 in s1FreqMap) || s1FreqMap[char2] <= 0) {
      return false;
    }
    s1FreqMap[char2]--;
  }

  return true;
};

const createFreqMap = (string) => {
  const hash = {};

  for (const char of string) {
    if (!(char in hash)) {
      hash[char] = 0
    }
    hash[char]++;
  }

  return hash;
}

module.exports = {
  anagrams,
};
