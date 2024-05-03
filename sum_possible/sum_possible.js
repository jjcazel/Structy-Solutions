sumPossible(8, [5, 12, 4]); // -> true, 4 + 4
sumPossible(15, [6, 2, 10, 19]); // -> false
sumPossible(13, [6, 2, 1]); // -> true
sumPossible(103, [6, 20, 1]); // -> true
sumPossible(12, []); // -> false
sumPossible(12, [12]); // -> true
sumPossible(0, []); // -> true
sumPossible(271, [10, 8, 265, 24]); // -> false
sumPossible(2017, [4, 2, 10]); // -> false
sumPossible(13, [3, 5]); // -> true
sumPossible(10, [4, 5, 7]); // -> true
// O(n * a) time and O(a) space where a is the amount and n is the length of numbers
const sumPossible = (amount, numbers, memo = {}) => {
  if (amount === 0) return true;
  if (amount < 0) return false;
  if (amount in memo) return memo[amount];


  for (const num of numbers) {
    if (sumPossible(amount - num, numbers, memo)) {
      memo[amount] = true;
      return true;
    };
  }


  memo[amount] = false;
  return false;
};
















































// console.log(sumPossible(271, [10, 8, 265, 24]))




// O(an) time and O(a) space 