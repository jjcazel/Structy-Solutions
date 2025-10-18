// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

//O(n) time and O(n) space
const longestStreak = (head, currVal = head.val, currStreak = 0, maxStreak = 0) => {
  if (head === null) return maxStreak;
  if (head.val === currVal) {
    currStreak += 1;
  } else {
    currStreak = 1; 
    currVal = head.val
  }
  const updatedMaxStreak = Math.max(maxStreak, currStreak);
  return longestStreak(head.next, currVal, currStreak, updatedMaxStreak);
};

module.exports = {
  longestStreak,
};


// Write a function, longestStreak, that takes in the head of a linked list as an argument. The function should return the length of the longest consecutive streak of the same value within the list.

// 5 -> 5 -> 7 -> 7 -> 7 -> 6
//                             h    n
// 7
// currVal = 6, maxStreak = 3, currStreak = 1