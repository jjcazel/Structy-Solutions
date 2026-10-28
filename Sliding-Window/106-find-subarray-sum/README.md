## find subarray sum

Write a function that takes in an array and a target sum. The function should return the start and end indices
(inclusive) of a subarray that sums to the target.

You can assume that the elements of the array are nonnegative.

#### test_00:

```js
findSubarraySum([1, 2, 3, 7, 5], 12); // -> [1,3]
// the subarray that spans indices 1 to 3 is [2,3,7] and its sum is 12
```

#### test_01:

```js
findSubarraySum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15); // -> [0,4]
```

#### test_02:

```js
findSubarraySum([3, 1, 4, 9, 2, 1, 7], 10); // -> [4,6]
```

#### test_03:

```js
findSubarraySum([3, 1, 4, 9, 2, 1, 7], 11); // -> [3,4]
```
