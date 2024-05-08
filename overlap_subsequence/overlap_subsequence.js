overlapSubsequence("dogs", "daogt"); // -> 3
overlapSubsequence("xcyats", "criaotsi"); // -> 4
overlapSubsequence("xfeqortsver", "feeeuavoeqr"); // -> 5
overlapSubsequence("kinfolklivemustache", "bespokekinfolksnackwave"); // -> 11
overlapSubsequence(
  "mumblecorebeardleggingsauthenticunicorn",
  "succulentspughumblemeditationlocavore"
); // -> 15
//O(nm) time and O(nm) space where m is the length of str1 and n is the length of str2
const overlapSubsequence = (str1, str2, str1Pointer = 0, str2Pointer = 0, memo = {}) => {
  const key = str1Pointer + ',' + str2Pointer;
  if (key in memo) return memo[key];
  if (str1Pointer === str1.length || str2Pointer === str2.length) return 0;


  if (str1[str1Pointer] === str2[str2Pointer]) {
    memo[key] = 1 + overlapSubsequence(str1, str2, str1Pointer + 1, str2Pointer + 1, memo);
  } else {
    memo[key] = Math.max(
      overlapSubsequence(str1, str2, str1Pointer + 1, str2Pointer, memo),
      overlapSubsequence(str1, str2, str1Pointer, str2Pointer + 1, memo),
    )
  }


  return memo[key];
};


module.exports = {
  overlapSubsequence,
};

