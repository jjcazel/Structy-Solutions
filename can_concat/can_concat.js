canConcat("oneisnone", ["one", "none", "is"]); // -> true
canConcat("oneisnone", ["on", "e", "is"]); // -> false
canConcat("oneisnone", ["on", "e", "is", "n"]); // -> true
canConcat("foodisgood", ["is", "g", "ood", "f"]); // -> true
canConcat("santahat", ["santah", "hat"]); // -> false
canConcat("santahat", ["santah", "san", "hat", "tahat"]); // -> true
canConcat("rrrrrrrrrrrrrrrrrrrrrrrrrrx", ["r", "rr", "rrr", "rrrr", "rrrrr", "rrrrrr"]); // -> false
canConcat("fooisgood", ["foo", "is", "g", "ood", "f"]); // -> true
//O(n * s) time and O(s) space where n is the length of the words array and s is the string length
const canConcat = (s, words, memo = {}) => {
  if (s in memo) return memo[s];
  if (s.length === 0) return true;


  for (const word of words) {
    if (s.startsWith(word)) {
      const suffix = s.slice(word.length);
      if (canConcat(suffix, words, memo) === true) {
        memo[s] = true;
        return true;
      };
    }
  }


  memo[s] = false;
  return false;
};


module.exports = {
  canConcat,
};

