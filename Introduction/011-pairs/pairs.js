//O(n^2) time and O(n) space where n is the length of elements
const pairs = (elements) => {
  const allPairs = [];
  for (let i = 0; i < elements.length; i++) {
    for (let j = i + 1; j < elements.length; j++) {
      allPairs.push([elements[i], elements[j]]);
    }
  }

  return allPairs;
};

module.exports = {
  pairs,
};
