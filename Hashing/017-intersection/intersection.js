// O(n) time and O(n) space
const intersection = (a, b) => {
  const prevElements = {};
  const dups = [];
  for (const elem of a) {
    prevElements[elem] = true;
  }

  for (const elem of b) {
    if (elem in prevElements) {
      dups.push(elem);
    }
  }

  return dups;
};

module.exports = {
  intersection,
};
