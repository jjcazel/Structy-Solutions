Write a function, befittingBrackets, that takes in a string as an argument. The function should return a boolean indicating whether or not the string contains correctly matched brackets.

You may assume the string contains only characters: ( ) [ ] { }

test_00

befittingBrackets('(){}[](())'); // -> true

test_01

befittingBrackets('({[]})'); // -> true

test_02

befittingBrackets('[][}'); // -> false

test_03

befittingBrackets('{[]}({}'); // -> false

test_04

befittingBrackets('[]{}(}[]'); // -> false

test_05

befittingBrackets('[]{}()[]'); // -> true

test_06

befittingBrackets(']{}'); // -> false

test_07

befittingBrackets(''); // -> true

test_08

befittingBrackets('{[(}])'); // -> false