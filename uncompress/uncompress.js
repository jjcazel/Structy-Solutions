<number><char>


for example, '2c' or '3a'.
uncompress("2c3a1t"); // -> 'ccaaat'
uncompress("4s2b"); // -> 'ssssbb'
uncompress("2p1o5p"); // -> 'ppoppppp'
uncompress("3n12e2z"); // -> 'nnneeeeeeeeeeeezz'
uncompress("127y"); // ->'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'
//O(nm) time and O(nm) space n is the number of groups and m is the max num for that group
const uncompress = (s) => {
  const output = [];// []
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  let i = 0;
  let j = 0;
  
  while (j < s.length) {
    if (alpha.includes(s[j])) {
      const maxNum = Number(s.slice(i, j));
      let currNum = 0;


      while (currNum < maxNum) {
        output.push(s[j]);
        currNum++;
      }
      j++;
      i = j;
    } else {
      j++;
    }
  }
  
  return output.join('');
};


module.exports = {
  uncompress,
};

