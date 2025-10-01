## intersection with dupes

Write a function, _intersectionWithDupes_, that takes in two arrays, _a_,_b_, as arguments. The function
should return a new array containing elements that are common to both input arrays. The elements in the
result should appear as many times as they occur in both input arrays.

You can return the result in any order.

#### test_00:

```js
intersectionWithDupes(
  ["a", "b", "c", "b"], 
  ["x", "y", "b", "b"]
); // -> ["b", "b"]
```

#### test_01:

```js
intersectionWithDupes(
  ["q", "b", "m", "s", "s", "s"], 
  ["s", "m", "s"]
); // -> ["m", "s", "s"]
```

#### test_02:

```js
intersectionWithDupes(
  ["p", "r", "r", "r"], 
  ["r"]
); // -> ["r"]
```

#### test_03:

```js
intersectionWithDupes(
  ["r"], 
  ["p", "r", "r", "r"]
); // -> ["r"]
```

#### test_04:

```js
intersectionWithDupes(
  ["t", "v", "u"], 
  ["g", "e", "d", "f"]
); // -> [ ]
```

#### test_05:

```js
intersectionWithDupes(
  ["a", "a", "a", "a", "a", "a",], 
  ["a", "a", "a", "a"]
); // -> ["a", "a", "a", "a"]
```

#### test_06:

```js
const a = [];
const b = [];
for (let i = 0; i < 20000; i += 1) {
  a.push(String(i));
  b.push(String(i));
}

intersectionWithDupes(a, b); // -> [0, 1, 2, ..., 19999]
```
