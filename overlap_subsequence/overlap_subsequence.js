overlapSubsequence("dogs", "daogt"); // -> 3
overlapSubsequence("xcyats", "criaotsi"); // -> 4
overlapSubsequence("xfeqortsver", "feeeuavoeqr"); // -> 5
overlapSubsequence("kinfolklivemustache", "bespokekinfolksnackwave"); // -> 11
overlapSubsequence(
  "mumblecorebeardleggingsauthenticunicorn",
  "succulentspughumblemeditationlocavore"
); // -> 15
//O(n * m) time and O(n * m) space where n is the length of str1 and m is the length of str2
const overlapSubsequence = (str1, str2, strOnePointer = 0, strTwoPointer = 0, memo = {}) => {
  const key = strOnePointer + ',' + strTwoPointer;
  if (key in memo) return memo[key];
  if (strOnePointer === str1.length || strTwoPointer === str2.length) return 0;


  if (str1[strOnePointer] === str2[strTwoPointer]) {
    memo[key] = 1 + overlapSubsequence(str1, str2, strOnePointer + 1, strTwoPointer + 1, memo);
  } else {
   memo[key] = Math.max(
      overlapSubsequence(str1, str2, strOnePointer + 1, strTwoPointer, memo),
      overlapSubsequence(str1, str2, strOnePointer, strTwoPointer + 1, memo)
    );
  }


  return memo[key];
};




module.exports = {
  overlapSubsequence,
};

