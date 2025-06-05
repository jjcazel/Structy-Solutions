// O(n) space and O(1) time
const longestWord = (sentence) => {
  const sentenceArray = sentence.split(' ');
  let maxWord = '';
  for (let word of sentenceArray) {
    if (word.length >= maxWord.length) {
      maxWord = word;
    }
  }

  return maxWord;
};

module.exports = {
  longestWord,
};
