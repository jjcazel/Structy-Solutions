## has substring anagram

Write a function that takes in a string and an anagram. The function should return a boolean indicating whether or not
the string contains a substring with the same characters as the anagram.

You can assume that the string contains no duplicate characters.

You can assume that the anagram contains no duplicate characters.

You can assume that the anagram is not longer than the string.

#### test_00:

```js
hasSubstringAnagram("greyhounds", "hoy"); // -> true
// the substring "yho" is an anagram of "hoy"
```

#### test_01:

```js
hasSubstringAnagram("gruyheonds", "hoy"); // -> false
```

#### test_02:

```js
hasSubstringAnagram("breakdowns", "snow"); // -> true
```

#### test_03:

```js
hasSubstringAnagram("dermatoglyphics", "red"); // -> true
```

#### test_04:

```js
hasSubstringAnagram("southernly", "thorny"); // -> false
```

#### test_05:

```js
hasSubstringAnagram("southernly", "nerlysouth"); // -> true
```
