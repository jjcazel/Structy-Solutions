pairedParentheses("(david)((abby))"); // -> true
pairedParentheses("()rose(jeff"); // -> false
pairedParentheses(")("); // -> false
pairedParentheses("()"); // -> true
pairedParentheses("(((potato())))"); // -> true
pairedParentheses("(())(water)()"); // -> true
pairedParentheses("(())(water()()"); // -> false
pairedParentheses(""); // -> true
pairedParentheses("))()"); // -> false
//O(n) time and O(n) space
const pairedParentheses = (str) => {
  const stack = []; //[ ( ]


  for (const char of str) {
    if (char === '(') {
      stack.push(char);
    }
    if (char === ')') {
      if (stack[stack.length - 1] === '(') {
        stack.pop();
      } else {
        return false;
      }
    }
  }


  return !stack.length;
};




module.exports = {
  pairedParentheses,
};

