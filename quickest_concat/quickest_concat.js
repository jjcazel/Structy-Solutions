quickestConcat('caution', ['ca', 'ion', 'caut', 'ut']); // -> 2
quickestConcat('caution', ['ion', 'caut', 'caution']); // -> 1
quickestConcat('respondorreact', ['re', 'or', 'spond', 'act', 'respond']); // -> 4
quickestConcat('simchacindy', ['sim', 'simcha', 'acindy', 'ch']); // -> 3
quickestConcat('simchacindy', ['sim', 'simcha', 'acindy']); // -> -1
quickestConcat('uuuuuu', ['u', 'uu', 'uuu', 'uuuu']); // -> 2
quickestConcat('rongbetty', ['wrong', 'bet']); // -> -1
quickestConcat('uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu', ['u', 'uu', 'uuu', 'uuuu', 'uuuuu']); // -> 7
//O(sw) time and O(s) space where s is the length of the string and w is the length of words
const quickestConcat = (s, words) => {
  const answer = quickestConcatHelper(s, words, {});
  return answer === Infinity ? -1 : answer;
};


const quickestConcatHelper = (s, words, memo) => {
  if (s in memo) return memo[s];
  if (s.length === 0) return 0;


  let minWords = Infinity;
  for (const word of words) {
    if (s.startsWith(word)) {
      const suffix = s.slice(word.length);
      let currCount = 1 + quickestConcatHelper(suffix, words, memo);
      minWords = Math.min(currCount, minWords);
    }
  }


  memo[s] = minWords;
  return minWords;
}


module.exports = {
  quickestConcat,
};

