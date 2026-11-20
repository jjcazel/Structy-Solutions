
// O(a + b) time and O(a + b) space
const exclusiveItems = (a, b) => {
  const set = new Set();
  for (let ele of a) {
    set.add(ele);
  }
  for (let ele of b) {
    if (set.has(ele)) {
      set.delete(ele);
    } else {
      set.add(ele);
    }
  }

  return Array.from(set);
};

module.exports = {
  exclusiveItems,
};
