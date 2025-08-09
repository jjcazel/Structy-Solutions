// O(n) time and O(n) space
const intersection = (a, b) => {
  const hashTable = {};
  const commonEles = [];
  for (const num of a) {
    hashTable[num] = true;
  }
  for (const num of b) {
    if (hashTable[num]) {
      commonEles.push(num);
    }
  }

  return commonEles;
};

module.exports = {
  intersection,
};
