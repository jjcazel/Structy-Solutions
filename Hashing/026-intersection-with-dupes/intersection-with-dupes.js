// O(min(a, b)) time and O(min(a, b)) space
const intersectionWithDupes = (a, b) => {
  const freqMapA = createFreqMapA(a);
  const intersections = [];

  for (let char of b) {
    if (char in freqMapA && freqMapA[char] > 0) {
      intersections.push(char);
      freqMapA[char]--;
    }
  }

  return intersections;
};

function createFreqMapA(array) {
  const hash = {};

  for (let char of array) {
    if (!(char in hash)) {
      hash[char] = 0;
    }
    hash[char]++;
  }

  return hash;
}

module.exports = {
  intersectionWithDupes,
};
