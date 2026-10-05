## has subarray sum

Write a function, _hasSubarraySum_, that takes in an array of _numbers_ and a _targetSum_. The
function should return a boolean indicating whether or not there exists a subarray of _numbers_ that
sums to the given target.

A subarray is a consecutive series of one or more elements of the array.

#### test_00:

```js
hasSubarraySum([1, 3, 1, 4, 3], 8); // -> true
```

#### test_01:

```js
hasSubarraySum([1, 3, 1, 4, 3], 2); // -> false
```

#### test_02:

```js
hasSubarraySum([1, 3, 1, 1, 3], 2); // -> true
```

#### test_03:

```js
hasSubarraySum([5], 5); // -> true
```

#### test_04:

```js
hasSubarraySum([4, 2, 5, 1, 5, -2, 8], 9); // -> true
```

#### test_05:

```js
hasSubarraySum([4, 2, 5, 1, 5, -2, 8], 10); // -> false
```

#### test_06:

```js
hasSubarraySum([1, 1, 1, 1, 1, 1, 1, 1, 1], 9); // -> true
```

#### test_07:

```js
hasSubarraySum([1, 1, 1, 1, 1, 1, 1, 1, 1], 10); // -> false
```

