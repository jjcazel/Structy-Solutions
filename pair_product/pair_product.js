pairProduct([3, 2, 5, 4, 1], 8); // -> [1, 3]
pairProduct([3, 2, 5, 4, 1], 10); // -> [1, 2]
pairProduct([4, 7, 9, 2, 5, 1], 5); // -> [4, 5]
pairProduct([4, 7, 9, 2, 5, 1], 35); // -> [1, 4]
pairProduct([3, 2, 5, 4, 1], 10); // -> [1, 2]
pairProduct([4, 6, 8, 2], 16); // -> [2, 3]
//O(n) time and O(n) space
const pairProduct = (numbers, targetProduct) => {
  const pairHash = {};


  for (let idx = 0; idx < numbers.length; idx++) {
    const currNum = numbers[idx];
    const compliment = targetProduct / currNum;
    if (compliment in pairHash) return [ pairHash[compliment], idx ];
    pairHash[currNum] = idx;
  }
};




module.exports = {
  pairProduct,
};

