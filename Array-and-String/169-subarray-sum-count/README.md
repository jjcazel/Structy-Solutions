## subarray sum count

Write a function, _subarraySumCount_, that takes in an array of _numbers_ and a _targetSum_. The
function should return the number of subarrays that sum to the given target.

A subarray is a consecutive series of one or more elements of the array.

#### test_00:

```js
subarraySumCount([1, 3, 1, 4, -2, 3], 5);  // -> 3
```

#### test_01:

```js
subarraySumCount([1, 3, 1, 4, 3], 5); // -> 2
```

#### test_02:

```js
subarraySumCount([1, 3, 1, 4, 3], 2); // -> 0
```

#### test_03:

```js
subarraySumCount([1, 3, 1, 4, 3], 8); // -> 2
```

#### test_04:

```js
subarraySumCount([1, 1, 1, 1], 2); // -> 3
```

#### test_05:

```js
subarraySumCount([-2, 1, 1, 1, -1, 1, 1, 1, 1], 3); // -> 8
```