// O(n) time and O(n) space where n is the number of items in the input array
const allUnique = (items) => {
  const seenItems = new Set();
  for (let item of items) {
    if (seenItems.has(item)) return false;
    seenItems.add(item);
  }

  return true;
};

module.exports = {
  allUnique,
};


// Write a function, allUnique, that takes in an array. The function should return a boolean indicating whether or not the array contains unique items.

// allUnique(["q", "r", "s", "a"]); // -> true
// {"q", "r", "s", "a"} -> true

// allUnique(["q", "r", "s", "a", "r", "z"]); // -> false
// {"q", "r", "s", "a", } -> false