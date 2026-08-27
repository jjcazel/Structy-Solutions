// O(a + b) time and O(a + b) space where a and b represents each hash map
const intersectionWithDupes = (a, b) => {
  const dupes = [];
  const hashA = createElements(a);
  // const hashB = createElements(b);

  for (let ele of b) { // ele = 'b'
    if (ele in hashA && hashA[ele] > 0) {
      dupes.push(ele);
      hashA[ele]--;
    }
  }

  return dupes;
};

const createElements = (elements) => {
  const eles = {};

  for (const el of elements){
    if (!(el in eles)) {
      eles[el] = 0;
    }
    eles[el]++;
  }

  return eles;
}

module.exports = {
  intersectionWithDupes,
};


// intersectionWithDupes(
//  ["a", "b", "c", "b"], 
//  ["x", "y", "b", "b"]
// ); // -> ["b", "b"]

// hashA = {"a": 1, "b": 2, "c": 1}
// hashB = {"x": 1, "y": 1, "b": 2}

// loop throug hashA and check in constant time if that ele is in hashB and if the value is the same push that value in the output array
// the given value amount of times