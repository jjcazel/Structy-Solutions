## subarray target sum size k

Write a function that takes in an array of numbers, a target sum, and a size k as arguments. The function should return
the number of subarrays of size k that sum to the target.

You can assume that k is less than or equal to the length of the input array.

#### test_00:

```js
subarrayTargetSumSizeK([2, 3, 2, 2, 3, 1, 3, 8, 5, 0, 2, 4], 7, 3); // -> 5
// The 5 subarrays of size 3 whose sum is 7 are:
//   [2,3,2]
//   [3,2,2]
//   [2,2,3]
//   [3,1,3]
//   [5,0,2]
```

#### test_01:

```js
subarrayTargetSumSizeK([2, 3, 2], 7, 3); // -> 1
```

#### test_02:

```js
subarrayTargetSumSizeK([1, 2, 2, 2, 2, 4, 6, 5, 1, 2, 0, 10, -2, 7], 8, 4); // -> 2
```

#### test_03:

```js
const nums = []
for (let i = 0; i < 50000; i += 1) {
  nums.push(0);
}
// [0,0,0,...]
subarrayTargetSumSizeK(nums, 1, 5000); // -> 0
```
