// O(a + b) time and O(min(a + b)) space where a and b represents each hash map
const intersectionWithDupes = (a, b) => {
  const dupes = [];
  const hashA = createElements(a);

  for (let ele of b) {
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