intersection([4,2,1,6], [3,6,9,2,10]) // -> [2,6]
intersection([2,4,6], [4,2]) // -> [2,4]
intersection([4,2,1], [1,2,4,6]) // -> [1,2,4]
intersection([0,1,2], [10,11]) // -> []
const a = [];
const b = [];
for (let i = 0; i < 50000; i += 1) {
  a.push(i);
  b.push(i);
}
intersection(a, b) // -> [0,1,2,3,..., 49999]
//O(n + m) time and O(min(n, m)) space where n is the array a and m is the length of array b
const intersection = (a, b) => {
  const arrayASet = new Set(a);
  const intersectingNums = [];


  for (const num of b) {
    if (arrayASet.has(num)) {
      intersectingNums.push(num);
    }
  }


  return intersectingNums;
};


module.exports = {
  intersection,
};

