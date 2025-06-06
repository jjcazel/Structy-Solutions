// O(n^2) time and O(n) space
const pairs = (elements) => {
  const pairs = [];
  for (let i = 0; i < elements.length; i++) {
    for (let j = i + 1; < elements.length; j++) {
      const currPair = [elements[i], elements[j]];
      pairs.push(currPair);
    }
  }

  return pairs;
};

module.exports = {
  pairs,
};
