befittingBrackets('(){}[](())'); // -> true
befittingBrackets('({[]})'); // -> true
befittingBrackets('[][}'); // -> false
befittingBrackets('{[]}({}'); // -> false
befittingBrackets('[]{}(}[]'); // -> false
befittingBrackets('[]{}()[]'); // -> true
befittingBrackets(']{}'); // -> false
befittingBrackets(''); // -> true
befittingBrackets('{[(}])'); // -> false
const befittingBrackets = (str) => {
  const stack = []; //[ (,  ]
  const key = {
    '{': '}',
    '[': ']',
    '(': ')'
  };


  for (const bracket of str) {
    if (bracket in key) {
      stack.push(bracket);
    } else {
      const lastOpeningBracket = stack.pop();
      if (key[lastOpeningBracket] !== bracket) return false;
    }
  }


  return stack.length === 0;
};


module.exports = {
  befittingBrackets,
};

