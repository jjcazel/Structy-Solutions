// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

//O(n) time and O(1) space
const longestStreak = (head) => {
  if (head === null) return 0;
  let currVal = head.val;
  let maxCount = 1;
  let currCount = 1;
  let current = head.next;

  while (current !== null) {
    if (current.val !== currVal) {
      currVal = current.val;
      maxCount = Math.max(currCount, maxCount);
      currCount = 0;
    }
    currCount += 1;
    current = current.next;
  }

  maxCount = Math.max(currCount, maxCount);

  return maxCount;
};

module.exports = {
  longestStreak,
};
