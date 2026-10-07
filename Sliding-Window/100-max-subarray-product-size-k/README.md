## max subarray product size k

Write a function that takes in an array of numbers and a size k as arguments. The function should return the maximum product
of subarrays that contain exactly k elements.

You can assume that k is less than or equal to the length of the input array.

You can assume that numbers of the array are non-zero.

#### test_00:

```js
maxSubarrayProductSizeK([4, 2, 1, -9, 8, 2, 3], 3); // -> 48
// [8,2,3] is the subarray of size 3 with the maximal product
```

#### test_01:

```js
maxSubarrayProductSizeK([-9, 1, -8, 2, 3, 7], 3); // -> 72
```

#### test_02:

```js
maxSubarrayProductSizeK([7, 4, -5, -7, 8, -10, -1], 2); // -> 35
```

#### test_03:

```js
maxSubarrayProductSizeK([60, 20, 10, 90, 50], 1); // -> 90
```

#### test_04:

```js
maxSubarrayProductSizeK([1,2,3,4], 4); // -> 24
```

#### test_05:

```js
const nums = []
for (let i = 0; i < 50000; i += 1) {
  nums.push(1);
}
// [1,1,1,...]
maxSubarrayProductSizeK(nums, 2000); // -> 1
```

#### test_06:

```js
const nums = []
for (let i = 0; i < 120000; i += 1) {
  nums.push(1);
}
// [1,1,1,...]
maxSubarrayProductSizeK(nums, 10000); // -> 1
```
