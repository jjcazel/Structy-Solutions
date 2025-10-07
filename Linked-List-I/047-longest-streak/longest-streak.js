// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// O(n) time and O(1) space
const longestStreak = (head) => {
  if (head === null) return 0;
  let currStreak = 0;
  let maxStreak = 0;
  let currVal = head.val ? head.val : null;
  let current = head;

  while (current !== null) {
    if (current.val === currVal) {
      currStreak += 1;
    } else {
      if (currStreak > maxStreak) maxStreak = currStreak;
      currStreak = 1;
      currVal = current.val;
    }
    current = current.next
  }
  if (currStreak > maxStreak) maxStreak = currStreak;

  return maxStreak;
};

module.exports = {
  longestStreak,
};

// Write a function, longestStreak, that takes in the head of a linked list as an argument. The function should return the length of the longest consecutive streak of the same value within the list.

//  9 -> 9 -> 1 -> 9 -> 9 -> 9 -> null
//                          curr
    
