//O(m + n) time and O(n) space where m and n are the length of each input array
const intersectionWithDupes = (a, b) => {
  const seenChars = {};
  const dups = [];
  for (let char of a) {
    if (!(char in seenChars)) seenChars[char] = 0;
    seenChars[char] += 1;
  }

  for (let char of b) {
    if (char in seenChars && seenChars[char] > 0) {
      dups.push(char);
      seenChars[char] -= 1;
    }
  }

  return dups;
};

module.exports = {
  intersectionWithDupes,
};

// Write a function, intersectionWithDupes, that takes in two arrays, a,b, as arguments. The function should return a new array containing elements that are common to both input arrays. The elements in the result should appear as many times as they occur in both input arrays.

// You can return the result in any order.

// intersectionWithDupes(
//   ["a", "b", "c", "b"], 
//   ["x", "y", "b", "b", "b"]
// ); // -> ["b", "b"]

// intersectionWithDupes(
  // ["q", "b", "m", "s", "s", "s"], 
  // ["s", "m", "s"]
// ); // -> ["m", "s", "s"]

// {"a":1, "b":1, "c":1}
// ["b", "b"]

// {"q":1, "b":1, "m":0, "s":1}
// ["s", "m", "s"]