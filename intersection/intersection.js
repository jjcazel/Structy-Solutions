
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

