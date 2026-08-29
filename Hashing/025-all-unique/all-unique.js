// O(n) time and O(n) space where n is the length of items
const allUnique = (items) => {
  const itemCounts = {};

  for (let item of items) {
    if (!(item in itemCounts)) {
      itemCounts[item] = 0;
    }
    itemCounts[item]++;
    if (itemCounts[item] > 1) return false
  }

  return true;
};

module.exports = {
  allUnique,
};
