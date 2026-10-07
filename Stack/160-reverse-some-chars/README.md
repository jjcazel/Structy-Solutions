## reverse some chars

Write a function, _reverseSomeChars_, that takes in string and an array of characters. The function
should return the string with the order of the given characters in reverse.

#### test_00:

```js
reverseSomeChars("computer", ["a", "e", "i", "o", "u"]); // -> 'cemputor'

// 'o', 'u', and 'e' are target characters in 'computer'
// so their relative order should be reversed to result in 'cemputor'
```

#### test_01:

```js
reverseSomeChars("skateboard", ["a", "e", "i", "o", "u"]); // -> 'skatobeard'
```

#### test_02:

```js
reverseSomeChars("airplane", ["m", "n", "r"]); // -> 'ainplare'
```

#### test_03:

```js
reverseSomeChars("building", ["g", "d", "i"]); // -> 'buglidni'
```
