## longest word

Write a function, _longestWord_, that takes in a sentence string as an argument. The function should return
the longest word in the sentence. If there is a tie, return the word that occurs later in the sentence.

You can assume that the sentence is non-empty.


#### test_00:

```js
longestWord("what a wonderful world"); // -> 'wonderful'
```

#### test_01:

```js
longestWord("have a nice day"); // -> 'nice'
```

#### test_02:

```js
longestWord("the quick brown fox jumped over the lazy dog"); // -> 'jumped'
```

#### test_03:

```js
longestWord("who did eat the ham"); // -> 'ham'
```

#### test_04:

```js
longestWord("potato"); // -> 'potato'
```