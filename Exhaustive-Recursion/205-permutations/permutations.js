
// O(n * n!) time and O(n * n!) space
const permutations = (items) => {
  if (items.length === 0) return [[]];

  const output = [];
  for (let ele of items) {
    const rest = permutations(items.filter((item) => item !== ele));
    for (let permutation of rest) {
      output.push([ele, ...permutation]);
    }
  }

  return output;
};

// console.log(permutations(['a', 'b', 'c']));

// OUTPUT: array of permutations
// RULES: create subarrays of all permutations given an array of unique characters
// INPUT: an array of unique elements
// CONSTRAINTS: None known
// APPROACH: Use recursion to make choices at at each index in the array. Then make the recursive call with the remainder of the array.

module.exports = {
  permutations,
};
