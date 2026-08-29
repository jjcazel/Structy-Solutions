// O(n) time and O(n) space
const intersection = (a, b) => {
  const charsASet = new Set(a);
  for (let charB of b) {
    if (charsASet.has(charB)) {
      intersections.push(charB);
    }
  }

  return intersections;
};

module.exports = {
  intersection,
};
