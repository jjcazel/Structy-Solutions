// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

//O(n) time and O(1) space where n is the number of nodes
const longestStreak = (head) => {
  if (head === null) return 0;
  let currVal = head.val;
  let currNode = head;
  let currStreak = 0;
  let maxStreak = 0;

  while (currNode !== null) {
    if (currNode.val === currVal) {
      currStreak += 1;
    } else {
      maxStreak = Math.max(currStreak, maxStreak);
      currStreak = 1;
      currVal = currNode.val
    }
    maxStreak = Math.max(currStreak, maxStreak);
    currNode = currNode.next;
  }

  return maxStreak;
};

module.exports = {
  longestStreak,
};

// 5 -> 5 -> 7 -> 7 -> 7 -> 6
//                            c
// currVal = 6
// currStreak = 1
// maxStreak = 3