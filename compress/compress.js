const compress = (s) => {
  const nums = '123456789';
  const compressedStr = []; // []
  let i = 0; // 0
  let j = 0; // 0


  let count = 1; // 1
  while (j <= s.length) {
    const currChar = s[j]; // 'c'
    if (currChar === s[i]) {
      if (i !== j) {
        count++;
      }
      j++;
    } else {
      compressedStr.push(count > 1 ? count : '');
      compressedStr.push(s[i]);
      i = j;
      j++;
      count = 1;
    }
  }


  return compressedStr.join('');
};


module.exports = {
  compress,
};

