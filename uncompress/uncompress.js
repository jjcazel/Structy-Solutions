// O(nm) time and O(nm) space where n is the num of sets and m is the length of the set
const uncompress = (s) => {
  const nums = '123456789';
  const decompressedStr = [];
  let i = 0; // 2
  let j = 0; // 4


  while (j < s.length) {
    const currChar = s[j];
    if (!nums.includes(currChar)) {
      let currNum = s.slice(i, j);
      while (currNum > 0) {
        decompressedStr.push(currChar);
        currNum--;
      }
      j++;
      i = j;
    } else {
      j++;
    }
  }


  return decompressedStr.join('')
};


module.exports = {
  uncompress,
};

