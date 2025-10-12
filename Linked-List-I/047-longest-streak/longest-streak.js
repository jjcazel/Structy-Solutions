// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// O(n) time and O(1) space where n is number of nodes
const longestStreak = (head) => {
  let maxStreak = 0;
  let currStreak = 0;
  let streakVal = head.val;
  let current = head;

  while (current !== null) {
    if (current.val === streakVal) {
      currStreak += 1;
    } else {
      streakVal = current.val;
      currStreak = 1;
    }
    maxStreak = Math.max(maxStreak, currStreak);
    current = current.next;
  }
  

  return maxStreak;
};

module.exports = {
  longestStreak,
};

// Write a function, longestStreak, that takes in the head of a linked list as an argument. The function should return the length of the longest consecutive streak of the same value within the list.

//   5 ->  5  ->  7  ->  7  ->  7  ->  6 -> null
//                                         curr

// streakVal = 6
// maxStreak= 3
// currStreak = 1