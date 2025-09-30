//O(a + b) time and O(a + b) space where a and b is the length of each array
const exclusiveItems = (a, b) => {
  const set = new Set(a);

  for (let num of b) {
    if (set.has(num)) {
      set.delete(num);
    } else {
      set.add(num);
    }
  }

  return [...set];
};

module.exports = {
  exclusiveItems,
};


// Write a function, exclusiveItems, that takes in two arrays, a,b, as arguments. The function should return a new array containing elements that are in either array but not both arrays.

// You may assume that each input array does not contain duplicate elements.

//   exclusiveItems([4,2,1,6], [3,6,9,2,10]); // -> [4,1,3,9,10]

// [ 4, 1, 3, 9, 10 ]