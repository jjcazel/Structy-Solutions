
//O(n) time and O(n) space
const allUnique = (items) => {
  const set = new Set(items);
  return set.size === items.length;
};

module.exports = {
  allUnique,
};
