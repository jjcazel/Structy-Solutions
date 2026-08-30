## factorial

Write a function, _factorial_, that takes in a number _n_ and returns the factorial of that number.
The factorial of _n_ is the product of all the positive numbers less than or equal to _n_. You must
solve this recursively.

```plaintext
For example, the factorial of 6 is:

6 * 5 * 4 * 3 * 2 * 1 = 720
```

You can assume that _n_ is a non-negative integer. Note that the factorial of 0 is defined to be 1
([wiki](https://en.wikipedia.org/wiki/Factorial)).

#### test_00:

```js
factorial(3); // -> 6
```

#### test_01:

```js
factorial(6); // -> 720
```

#### test_02:

```js
factorial(18); // -> 6402373705728000
```

#### test_03:

```js
factorial(1); // -> 1
```

#### test_04:

```js
factorial(13); // -> 6227020800
```

#### test_05:

```js
factorial(0); // -> 1
```
