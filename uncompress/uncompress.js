// O(n) time and O(n) space
const uncompress = (s) => {
  const decompressedOutput = []; // ['n', 'n', 'n',]
  let currNum = []; // ['1', '2']
  
  for (let i = 0; i < s.length; i++) {// i = 4
    const currChar = s[i]; // 'e'
    if (!isNaN(currChar)) {
      currNum.push(currChar);
    } else {
      let numOfChars = Number(currNum.join(''));// 1
      while (numOfChars > 0) {
        decompressedOutput.push(currChar);
        numOfChars--;
      }
      currNum = [];
    }
  }


  return decompressedOutput.join('');
};


// loop through the string
  // if number keeping looping to get every digit of that number
  // if letter, store the current number and run a while loop for that num of times
  // remember to reduce the num on each iteration
  // on each iteration push the current letter into the output array until the loop finishes
  // when the main for loop finishes we're at the end of the string and can return our uncompressed output.


module.exports = {
  uncompress,
};

