maxPalinSubsequence("luwxult"); // -> 5
maxPalinSubsequence("xyzaxxzy"); // -> 6
maxPalinSubsequence("lol"); // -> 3
maxPalinSubsequence("boabcdefop"); // -> 3
maxPalinSubsequence("z"); // -> 1
maxPalinSubsequence("chartreusepugvicefree"); // -> 7
maxPalinSubsequence("qwueoiuahsdjnweuueueunasdnmnqweuzqwerty"); // -> 15
maxPalinSubsequence("enamelpinportlandtildecoldpressedironyflannelsemioticsedisonbulbfashionaxe"); // -> 31
// O(n^2) time and O(n^2) space
const maxPalinSubsequence = (str, startIdx = 0, endIdx = str.length - 1, memo = {}) => {
  const position = startIdx + ',' + endIdx;
  if (position in memo) return memo[position];
  if (startIdx === endIdx) return 1;
  if (startIdx > endIdx) return 0;


  if (str[startIdx] === str[endIdx]) {
    memo[position] = 2 + maxPalinSubsequence(str, startIdx + 1, endIdx - 1, memo);
  } else {
    memo[position] = Math.max(
      maxPalinSubsequence(str, startIdx + 1, endIdx, memo), 
      maxPalinSubsequence(str, startIdx, endIdx - 1, memo)
    );
  }


  return memo[position];
};






































// const maxPalinSubsequence = (str) => {