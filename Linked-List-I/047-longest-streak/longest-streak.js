// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

//O(n) time and O(1) space
const longestStreak = (head) => {
  if (head === null) return 0;
  let current = head;
  let maxStreak = 0;
  let currStreak = 0;
  let currVal = head.val;

  while (current !== null) {
    if (current.val === currVal) {
      currStreak += 1;
    } else {
      currStreak = 1;
      currVal = current.val;
    }
    maxStreak = Math.max(currStreak, maxStreak);
    current = current.next;
  }

  return maxStreak;
};

module.exports = {
  longestStreak,
};

// Write a function, longestStreak, that takes in the head of a linked list as an argument. The function should return the length of the longest consecutive streak of the same value within the list.

// 5 -> 5 -> 7 -> 7 -> 7 -> 6
//                            c
// 7
// currVal = 6, maxStreak = 3, currStreak = 1