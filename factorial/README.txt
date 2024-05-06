Write a function, factorial, that takes in a number n and returns the factorial of that number. The factorial of n is the product of all the positive numbers less than or equal to n. You must solve this recursively.

For example, the factorial of 6 is:


6 * 5 * 4 * 3 * 2 * 1 = 720

You can assume that n is a non-negative integer. Note that the factorial of 0 is defined to be 1 (wiki).

test_00

factorial(3); // -> 6

test_01

factorial(6); // -> 720

test_02

factorial(18); // -> 6402373705728000

test_03

factorial(1); // -> 1

test_04

factorial(13); // -> 6227020800

test_05

factorial(0); // -> 1