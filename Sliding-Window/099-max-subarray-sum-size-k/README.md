## max subarray sum size k

Write a function that takes in an array of numbers and a size k as arguments. The function should return the maximum sum
of subarrays that contain exactly k elements.

You can assume that k is less than or equal to the length of the input array.

#### test_00:

```js
maxSubarraySumSizeK([4, 2, 1, -9, 8, 4, 3], 3); // -> 15
// [8,4,3] is the subarray of size 3 with the maximal sum
```

#### test_01:

```js
maxSubarraySumSizeK([2, 1, 5, -4, 6] , 3); // -> 8
```

#### test_02:

```js
maxSubarraySumSizeK([1, 4, 1, 10, 25, 3, 1, 0, 20], 4); // -> 40
```

#### test_03:

```js
maxSubarraySumSizeK([20, 50, 10, 60, 80, 70], 1); // -> 80
```

#### test_04:

```js
maxSubarraySumSizeK([-4, -18, -2, -5, -9], 2); // -> -7
```

#### test_05:

```js
const nums = [];
for (let i = 0; i < 50000; i += 1) {
  nums.push(1);
}
// [1,1,1,...]
maxSubarraySumSizeK(nums, 2000); // -> 2000
```

#### test_06:

```js
const nums = [];
for (let i = 0; i < 120000; i += 1) {
  nums.push(1);
}
// [1,1,1,...]
maxSubarraySumSizeK(nums, 10000); // -> 10000
```
