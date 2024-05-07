mostFrequentChar('bookeeper'); // -> 'e'
mostFrequentChar('david'); // -> 'd'
mostFrequentChar('abby'); // -> 'b'
mostFrequentChar('mississippi'); // -> 'i'
mostFrequentChar('potato'); // -> 'o'
mostFrequentChar('eleventennine'); // -> 'e'
mostFrequentChar("riverbed"); // -> 'r'
//O(n) time and O(n) space
const mostFrequentChar = (s) => {
  const counts = {};


  for (let char of s) {
    counts[char] = counts[char] ? counts[char] + 1 : 1;
  }


  const mostFreq = Math.max(...Object.values(counts));


  for (let key in counts) {
    if (counts[key] === mostFreq) {
      return key;
    }
  }
};


module.exports = {
  mostFrequentChar,
};

