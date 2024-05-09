befittingBrackets('(){}[](())'); // -> true
befittingBrackets('({[]})'); // -> true
befittingBrackets('[][}'); // -> false
befittingBrackets('{[]}({}'); // -> false
befittingBrackets('[]{}(}[]'); // -> false
befittingBrackets('[]{}()[]'); // -> true
befittingBrackets(']{}'); // -> false
befittingBrackets(''); // -> true
befittingBrackets('{[(}])'); // -> false
//O(n) time and O(n) space
const befittingBrackets = (str) => {
  const bracketPairs = {'}': '{', ')': '(', ']': '['};
  const stack = [];
  let i = 0;


  while (i < str.length) {
    const bracket = str[i];
    if (bracket === '(' || bracket === '{' || bracket === '[' ) {
      stack.push(bracket);
    }
    if (bracket === ']' || bracket === '}' || bracket === ')') {
      const lastBracket = stack.pop();
      if (lastBracket !== bracketPairs[bracket]) return false;
    }
    i++;
  }


  return !stack.length;
};


module.exports = {
  befittingBrackets,
};

