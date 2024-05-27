Write a function, pairedParentheses, that takes in a string as an argument. The function should return a boolean indicating whether or not the string has well-formed parentheses.

You may assume the string contains only alphabetic characters, '(', or ')'.

test_00

pairedParentheses("(david)((abby))"); // -> true

test_01

pairedParentheses("()rose(jeff"); // -> false

test_02

pairedParentheses(")("); // -> false

test_03

pairedParentheses("()"); // -> true

test_04

pairedParentheses("(((potato())))"); // -> true

test_05

pairedParentheses("(())(water)()"); // -> true

test_06

pairedParentheses("(())(water()()"); // -> false

test_07

pairedParentheses(""); // -> true

test_08

pairedParentheses("))()"); // -> false