## fizz buzz

Write a function, _fizzBuzz_, that takes in a number n as an argument. The function should return an
array containing numbers from 1 to n, replacing certain numbers according to the following rules:

- if the number is divisible by 3, make the element "fizz"
- if the number is divisible by 5, make the element "buzz"
- if the number is divisible by 3 and 5, make the element "fizzbuzz" 

#### test_00:

```js
fizzBuzz(11); // -> [1,2,"fizz",4,"buzz","fizz",7,8,"fizz","buzz",11]
```

#### test_01:

```js
fizzBuzz(2); // -> [1,2]
```

#### test_02:

```js
fizzBuzz(16); // -> [
//   1,
//   2,
//   "fizz",
//   4,
//   "buzz",
//   "fizz",
//   7,
//   8,
//   "fizz",
//   "buzz",
//   11,
//   "fizz",
//   13,
//   14,
//   "fizzbuzz",
//   16
// ]
```

#### test_03:

```js
fizzBuzz(32); // -> [
//   1,      2,          "fizz",     4, 
//   "buzz", "fizz",     7,          8, 
//   "fizz", "buzz",     11,         "fizz", 
//   13,     14,         "fizzbuzz", 16, 
//   17,     "fizz",     19,         "buzz", 
//   "fizz", 22,         23,         "fizz", 
//   "buzz", 26,         "fizz",     28, 
//   29,     "fizzbuzz", 31,         32 
// ] 
```
