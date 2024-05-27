pairedParentheses("(david)((abby))"); // -> true
pairedParentheses("()rose(jeff"); // -> false
pairedParentheses(")("); // -> false
pairedParentheses("()"); // -> true
pairedParentheses("(((potato())))"); // -> true
pairedParentheses("(())(water)()"); // -> true
pairedParentheses("(())(water()()"); // -> false
pairedParentheses(""); // -> true
pairedParentheses("))()"); // -> false
//O(n) time and O(1) space
const pairedParentheses = (str) => {
  let count = 0;


  for (const char of str) {
    if (char === '(') {
      count++;
    }
    if (char === ')') {
      count--;
    }
    if (count < 0 ) return false;
  }


  return count === 0;
};




module.exports = {
  pairedParentheses,
};

