'aaa' compresses to '3a'
'cc' compresses to '2c'
't' should remain as 't'
compress('ccaaatsss'); // -> '2c3at3s'
compress('ssssbbz'); // -> '4s2bz'
compress('ppoppppp'); // -> '2po5p'
compress('nnneeeeeeeeeeeezz'); // -> '3n12e2z'
compress('yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'); 
// -> '127y'
//O(n) time and O(n) space where n is the length of the input string
const compress = (s) => {
  const compressed = [];
  let i = 0; // 2
  let j = 0;
  while (j <= s.length) {
    if (s[i] === s[j]) {
      j++;
    } else {
      let count = j - i;
      if (count > 1) {
        compressed.push(count);
        compressed.push(s[i]);
      } else {
        compressed.push(s[i]);
      }
      i = j;
    } 
  }


  return compressed.join('');
};




module.exports = {
  compress,
};

