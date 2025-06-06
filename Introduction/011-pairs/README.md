## pairs

Write a function, _pairs_, that takes in an array as an argument. The function should return an
array containing all unique pairs of elements.

You may return the pairs in any order and the order of elements within a single pair does not matter.

You can assume that the input array contains unique elements.

#### test_00:

```js
pairs(["a", "b", "c"]); // ->
// [
//    ["a", "b"],
//    ["a", "c"],
//    ["b", "c"]
// ]
```

#### test_01:

```js
pairs(["a", "b", "c", "d"]); // ->
// [
//    ["a", "b"],
//    ["a", "c"],
//    ["a", "d"],
//    ["b", "c"],
//    ["b", "d"],
//    ["c", "d"]
// ]
```

#### test_02:

```js
pairs(["cherry", "cranberry", "banana", "blueberry", "lime", "papaya"]); // ->
// [ 
//   [ "cherry", "cranberry" ], 
//   [ "cherry", "banana" ], 
//   [ "cherry", "blueberry" ], 
//   [ "cherry", "lime" ], 
//   [ "cherry", "papaya" ], 
//   [ "cranberry", "banana" ], 
//   [ "cranberry", "blueberry" ], 
//   [ "cranberry", "lime" ], 
//   [ "cranberry", "papaya" ], 
//   [ "banana", "blueberry" ], 
//   [ "banana", "lime" ], 
//   [ "banana", "papaya" ], 
//   [ "blueberry", "lime" ], 
//   [ "blueberry", "papaya" ], 
//   [ "lime", "papaya" ] 
// ] 
```