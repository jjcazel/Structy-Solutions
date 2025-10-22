// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

//O(n) time and O(n) space where n is the number of nodes
const longestStreak = (head, currVal = head.val, count = 0, maxCount = 0) => {
  if (head === null) return Math.max(maxCount, count);
  if (head.val === currVal) {
    count += 1;
    return longestStreak(head.next, currVal, count, maxCount)
  } else {
    maxCount = Math.max(count, maxCount);
    count = 1;
    currVal = head.val;
    return longestStreak(head.next, currVal, count, maxCount)
  }
};

module.exports = {
  longestStreak,
};

// 9 -> 9 -> 1 -> 9 -> 9 -> 9
//                            h  
// currVal = 9
// count = 3
// maxCount = 2