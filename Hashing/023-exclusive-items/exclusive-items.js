// O(n + m) time and O(n + m) aux space where n = a.length and m = b.length
const exclusiveItems = (a, b) => {
  const setA = new Set(a);
  const setB = new Set(b);
  const result = [];

  for (let charA of a) {
    if (!setB.has(charA)) {
      result.push(charA);
    }
  }
  for (let charB of b) {
    if (!setA.has(charB)) {
      result.push(charB);
    }
  }

  return result;
};

module.exports = {
  exclusiveItems,
};
