// O(n) time and O(n) space where n is the length of the sentence
const longestWord = (sentence) => {
  const words = sentence.split(' ');
  let maxWord = '';
  for (let word of words) {
    if (word.length >= maxWord.length) maxWord = word;
  }

  return maxWord;
};

module.exports = {
  longestWord,
};
